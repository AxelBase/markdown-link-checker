import { marked } from 'marked';

interface Link {
  text: string;
  url: string;
  line: number;
  type: 'absolute' | 'relative' | 'anchor';
}

export function extractLinks(content: string): Link[] {
  const links: Link[] = [];
  const lines = content.split('\n');

  const tokens = marked.lexer(content);
  console.log('Marked tokens:', tokens);

  function walk(token: any, tokenIndex: number) {
    if (token.type === 'link') {
      const line =
        lines.findIndex(
          l => l.includes(token.text) || l.includes(token.href)
        ) + 1 || tokenIndex + 1;

      links.push({
        text: token.text,
        url: token.href,
        line,
        type: token.href.startsWith('http')
          ? 'absolute'
          : token.href.startsWith('#')
          ? 'anchor'
          : 'relative'
      });
      console.log('Found link:', { text: token.text, url: token.href, line });
    }

    // Recurse into children
    if (token.tokens) token.tokens.forEach((t: any) => walk(t, tokenIndex));
    if (token.items) token.items.forEach((t: any) => walk(t, tokenIndex));
  }

  tokens.forEach((token, i) => walk(token, i));

  // Reference definitions
  const refTokens = tokens.filter((t: any) => t.type === 'link_reference_definition');
  refTokens.forEach((token: any, index: number) => {
    const line = lines.findIndex(l => l.includes(`[${token.label}]:`)) + 1 || index + 1;
    links.push({
      text: token.label,
      url: token.href,
      line,
      type: token.href.startsWith('http') ? 'absolute' : 'relative'
    });
    console.log('Found ref link:', { text: token.label, url: token.href, line });
  });

  console.log('Extracted links:', links);
  return links;
}
