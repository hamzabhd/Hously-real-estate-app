import LoadingPropertyCard from './LoadingPropertyCard'

const LoadingCards = () => {
  return (
    <div className="mx-auto min-h-screen max-w-[1600px]">
      <div className="mx-auto grid gap-4 sm:grid-cols-2 sm:p-4 md:p-6 lg:grid-cols-3 xl:grid-cols-4">
        <LoadingPropertyCard />
        <LoadingPropertyCard />
        <LoadingPropertyCard />
        <LoadingPropertyCard />
        <LoadingPropertyCard />
        <LoadingPropertyCard />
        <LoadingPropertyCard />
        <LoadingPropertyCard />
      </div>
    </div>
  )
}

export default LoadingCards
