/**
 * Utility to resolve internal URLs and asset paths consistently,
 * regardless of deployment target (subfolder like GitHub Pages, root domain, Docker, etc.).
 */
export function resolvePath(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('data:') ||
    path.startsWith('mailto:')
  ) {
    return path;
  }
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
