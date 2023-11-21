import { SearchObjTypes } from '@/types/types'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useSearchQueries = () => {
  const { status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const searchQueries = {
    type: searchParams.get('type'),
    property: searchParams.get('property'),
    region: searchParams.get('region'),
    min: searchParams.get('min'),
    max: searchParams.get('max'),
  }
  const prevPage = searchParams.get('prev-page')

  const handleQueries = (value: string, query: string, type: string | null) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    const filterPage = pathname === '/search' ? pathname : '/'
    if (value && !type) {
      newSearchParams.append(query, value)
    } else if (value && type !== value) {
      newSearchParams.set(query, value)
    } else {
      newSearchParams.delete(query)
    }
    router.push(`${filterPage}?` + newSearchParams)
  }

  const handleSearchQueries = (obj: SearchObjTypes, page: string) => {
    const reformedObj = Object.entries(obj).filter(
      (item) => item[1],
    ) as string[][]
    const newSearchParams = new URLSearchParams(reformedObj)
    router.push(`/${page}?` + newSearchParams)
  }

  const handleAuthQuery = (value: string, page: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set('prev-page', value)
    router.push(`/${page}?` + newSearchParams)
  }

  const checkAuthenticatedUser = (cb: () => void) => {
    if (status === 'loading') return
    if (status === 'unauthenticated') {
      return handleAuthQuery(pathname, 'sign-in')
    }
    return cb()
  }

  return {
    handleQueries,
    handleSearchQueries,
    checkAuthenticatedUser,
    searchParams,
    searchQueries,
    prevPage,
  }
}
