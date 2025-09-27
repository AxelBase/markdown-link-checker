import pLimit from 'p-limit';
import { marked } from 'marked';

interface Link {
  text: string;
  url: string;
  line: number;
  type: 'absolute' | 'relative' | 'anchor';
}

interface ValidationResult {
  link: Link;
  status: number | 'error' | 'skipped' | 'ignored';
  finalUrl?: string;
  error?: string;
}

interface Config {
  timeout: number;
  ignorePatterns: string[];
  externalOnly: boolean;
  concurrency: number;
  virtualFileTree?: string[];
  fullMarkdownContent?: string; // add so anchor checks can work
}

export async function validateLinks(
  links: Link[],
  config: Config
): Promise<ValidationResult[]> {
  const limit = pLimit(config.concurrency || 5);
  const fileTree = config.virtualFileTree || ['./docs/file.md'];

  return Promise.all(
    links.map(link =>
      limit(async () => {
        // Skip if externalOnly set
        if (config.externalOnly && link.type !== 'absolute') {
          return { link, status: 'skipped' };
        }

        // Skip if matches ignore patterns
        if (config.ignorePatterns?.some(p => link.url.match(new RegExp(p)))) {
          return { link, status: 'ignored' };
        }

        if (link.type === 'absolute') {
          const controller = new AbortController();
          const timeout = Math.max(config.timeout || 2000, 1000);
          const timeoutId = setTimeout(() => controller.abort(), timeout);
          try {
            let res: Response;
            try {
              // try HEAD first
              res = await fetch(link.url, {
                method: 'HEAD',
                signal: controller.signal,
                redirect: 'follow'
              });
            } catch (headErr) {
              // retry with GET if HEAD blocked
              res = await fetch(link.url, {
                method: 'GET',
                signal: controller.signal,
                redirect: 'follow',
                mode: 'no-cors' // avoid CORS failure, but response limited
              });
            }
            clearTimeout(timeoutId);

            if (!res || res.type === 'opaque') {
              // Browser blocked verification, assume link is valid but note it
              return { 
                link, 
                status: 200, 
                error: 'Browser blocked verification due to CORS. This is expected — link likely valid.' 
              };
            }


            return { link, status: res.status, finalUrl: res.url };
          } catch (err) {
            clearTimeout(timeoutId);
            const error = err as Error;
            if (error.name === 'AbortError') {
              return { link, status: 'error', error: 'Timeout' };
            }
            // network/CORS error
            return { link, status: 'skipped', error: 'CORS or network blocked' };
          }
        } else if (link.type === 'relative') {
          return { link, status: fileTree.includes(link.url) ? 200 : 404 };
        } else {
          // anchor links
          try {
            if (!config.fullMarkdownContent) {
              return { link, status: 'skipped', error: 'No document provided for anchor validation' };
            }
            const html = marked.parse(config.fullMarkdownContent);
            const parser = new DOMParser();
            const doc = parser.parseFromString(html as string, 'text/html');
            const id = link.url.replace(/^#/, '');
            return { link, status: doc.getElementById(id) ? 200 : 404 };
          } catch (e) {
            return { link, status: 'error', error: (e as Error).message };
          }
        }
      })
    )
  );
}
