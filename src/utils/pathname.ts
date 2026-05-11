export function getNormalizedPathname(pathname: string): string {
  // Remove trailing slashes and ensure it starts with /
  let normalized = pathname.trim();
  
  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }
  
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }
  
  // Remove base path prefix if it exists (e.g., /ra1461392321003)
  // Import.meta.env.BASE_URL contains the base path from vite config
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (basePath && normalized.startsWith(basePath + '/')) {
    normalized = normalized.slice(basePath.length);
  } else if (basePath && normalized === basePath) {
    normalized = '/';
  }
  
  return normalized;
}
