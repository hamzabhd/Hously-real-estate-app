import { SearchObjTypes } from '@/types/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useSearchQueries = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const handleQueries = (
    value: string,
    query: string,
    type: string | null,
    page: string,
  ) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    const filterPage = pathname === '/search' ? pathname : page
    if (value && !type) {
      newSearchParams.append(query, value)
    } else if (value && type !== value) {
      newSearchParams.set(query, value)
    } else {
      newSearchParams.delete(query)
    }
    router.push(`/${filterPage}?` + newSearchParams)
  }

  const handleSearchQueries = (obj: SearchObjTypes, page: string) => {
    const reformedObj = Object.entries(obj).filter((item) => item[1])
    const newSearchParams = new URLSearchParams(reformedObj)
    router.push(`/${page}?` + newSearchParams)
  }

  return {
    handleQueries,
    handleSearchQueries,
    searchParams,
  }
}
