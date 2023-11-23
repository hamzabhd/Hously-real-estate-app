import LoadingCards from '@/components/loaders/LoadingCards'

const Loading = () => {
  return (
    <>
      <h1 className="mx-auto max-w-[1600px] p-4 pb-2 text-lg font-medium md:px-6 md:pt-6 lg:text-2xl">
        Searching...
      </h1>
      <LoadingCards />
    </>
  )
}

export default Loading
