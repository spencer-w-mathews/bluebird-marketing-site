import {sanityClient} from './client'

const cache = new Map<string, unknown>()

export async function fetchSanity<T>(
  query: string,
  params?: Record<string, unknown>,
  useCache = true,
): Promise<T> {
  const key = JSON.stringify({query, params})
  if (useCache && cache.has(key)) {
    return cache.get(key) as T
  }

  const data = await sanityClient.fetch<T>(query, params ?? {})
  if (useCache) {
    cache.set(key, data)
  }
  return data
}

export function clearSanityCache() {
  cache.clear()
}
