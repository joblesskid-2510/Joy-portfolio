/**
 * Returns the base URL for the app, which varies between
 * development ("/") and production ("/Joy-portfolio/").
 * Uses Vite's built-in import.meta.env.BASE_URL.
 */
export function getBasePath(): string {
  return import.meta.env.BASE_URL;
}

/**
 * Resolves an absolute asset path (e.g., "/images/foo.png")
 * to the correct path including the base URL prefix.
 */
export function assetPath(path: string): string {
  const base = getBasePath();
  // Remove leading slash from path since base already ends with /
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
