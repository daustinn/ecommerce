'use client'

import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams
} from 'next/navigation'

export const useSearchParams = (
  defaultName?: string
): [URLSearchParams, (name: string, value?: string) => void] => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useNextSearchParams()

  const handleSearch = (name: string, value?: string) => {
    const finalValue = name && !value ? name : (value ?? '')
    const finalName = defaultName ? defaultName : name

    const currentSearchParams = new URLSearchParams(
      Array.from(searchParams.entries())
    )

    if (searchParams.get(finalName) === finalValue) {
      currentSearchParams.delete(finalName)
    } else currentSearchParams.set(finalName, finalValue)
    const search = currentSearchParams.toString()
    const query = search ? `?${search}` : ''
    router.push(`${pathname}${query}`)
  }

  return [searchParams, handleSearch]
}
