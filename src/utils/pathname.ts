const baseUrl = import.meta.env.BASE_URL

export function getNormalizedPathname(pathname: string) {
  if (!pathname) {
    return '/'
  }

  if (!baseUrl || baseUrl === '/') {
    return pathname
  }

  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl

  if (pathname === normalizedBase || pathname === `${normalizedBase}/`) {
    return '/'
  }

  if (pathname.startsWith(`${normalizedBase}/`)) {
    return pathname.slice(normalizedBase.length)
  }

  return pathname
}