import { useRouter, useSearchParams } from 'next/navigation'

export const useSearchQueries = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const handleQueries = (
    value: string,
    query: string,
    type: string | null,
    page: string,
  ) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    if (!type) {
      newSearchParams.append(query, value)
    } else if (type !== value) {
      newSearchParams.set(query, value)
    } else {
      newSearchParams.delete(query)
    }
    router.push(`/?` + newSearchParams)
  }

  return {
    handleQueries,
    searchParams,
  }
}
