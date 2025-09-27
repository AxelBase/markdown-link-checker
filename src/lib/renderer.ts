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

export function renderResults(results: ValidationResult[], sortBy: string = 'line', sortOrder: 'asc' | 'desc' = 'asc'): string {
  const grouped = {
    Valid: results.filter(r => r.status >= 200 && r.status < 400),
    Broken: results.filter(r => r.status >= 400 || r.status === 'error'),
    Redirected: results.filter(r => r.finalUrl && r.finalUrl !== r.link.url),
    Skipped: results.filter(r => r.status === 'skipped'),
    Ignored: results.filter(r => r.status === 'ignored')
  };

  // Sort function
  const sortedResults = Object.values(grouped).flat().sort((a, b) => {
    let aValue: string | number = a.link[sortBy as keyof Link] || a.status;
    let bValue: string | number = b.link[sortBy as keyof Link] || b.status;
    if (sortBy === 'url' || sortBy === 'text') {
      aValue = aValue.toString().toLowerCase();
      bValue = bValue.toString().toLowerCase();
    }
    if (sortOrder === 'desc') [aValue, bValue] = [bValue, aValue];
    return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
  });

  let html = '<div class="container"><table class="table table-striped" aria-label="Validation Results">';
  html += '<thead><tr><th scope="col">Text</th><th scope="col">URL</th><th scope="col">Line</th><th scope="col">Status</th></tr></thead><tbody>';
  sortedResults.forEach(result => {
    html += `<tr>
      <td>${result.link.text}</td>
      <td>${result.link.url}${result.finalUrl ? ` → ${result.finalUrl}` : ''}</td>
      <td>${result.link.line}</td>
      <td>${result.status}${result.error ? ` (Error: ${result.error})` : ''}</td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  return html;
}

export function filterResults(results: ValidationResult[], filter: string, search: string): ValidationResult[] {
  let filtered = results;
  if (filter) {
    filtered = filtered.filter(r => {
      if (filter === 'Valid') return r.status >= 200 && r.status < 400;
      if (filter === 'Broken') return r.status >= 400 || r.status === 'error';
      if (filter === 'Redirected') return r.finalUrl && r.finalUrl !== r.link.url;
      if (filter === 'Skipped') return r.status === 'skipped';
      if (filter === 'Ignored') return r.status === 'ignored';
      return true;
    });
  }
  if (search) {
    const lowerSearch = search.toLowerCase();
    filtered = filtered.filter(r =>
      r.link.text.toLowerCase().includes(lowerSearch) || r.link.url.toLowerCase().includes(lowerSearch)
    );
  }
  return filtered;
}