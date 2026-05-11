export function getNormalizedPathname(pathname: string): string {
  // Remove trailing slashes and ensure it starts with /
  let normalized = pathname.trim();
  
  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }
  
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }
  
  return normalized;
}
