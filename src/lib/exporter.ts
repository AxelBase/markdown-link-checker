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

export function exportReport(results: ValidationResult[], format: 'txt' | 'json'): void {
  let content: string;
  if (format === 'txt') {
    content = results.map(r => 
      `${r.link.text} (${r.link.url}) - Line: ${r.link.line}, Status: ${r.status}${r.finalUrl ? `, Final URL: ${r.finalUrl}` : ''}${r.error ? `, Error: ${r.error}` : ''}`
    ).join('\n');
  } else { // json
    content = JSON.stringify(results, null, 2);
  }

  const blob = new Blob([content], { type: format === 'txt' ? 'text/plain' : 'application/json' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `link-validation-report.${format}`;
  a.click();
  window.URL.revokeObjectURL(url);
}

export async function copyToClipboard(results: ValidationResult[]): Promise<void> {
  const content = results.map(r => 
    `${r.link.text} (${r.link.url}) - Line: ${r.link.line}, Status: ${r.status}${r.finalUrl ? `, Final URL: ${r.finalUrl}` : ''}${r.error ? `, Error: ${r.error}` : ''}`
  ).join('\n');
  await navigator.clipboard.writeText(content);
}