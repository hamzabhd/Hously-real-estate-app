const LoadingPropertyCard = () => {
  return (
    <div className="sm:container-shadow mb-6 overflow-hidden sm:mb-0 sm:rounded-3xl sm:border-2 sm:border-white">
      <div className="animate-loading mb-1 aspect-[16/10] w-full"></div>
      <div className="px-4 py-6">
        <span className="animate-loading mb-2 block h-5 w-3/5"></span>
        <span className="animate-loading mb-6 block h-3 w-1/2"></span>
        <span className="animate-loading mb-6 block h-12 w-full"></span>
        <div className="flex items-center justify-between">
          <span className="animate-loading block h-4 w-2/5"></span>
          <span className="animate-loading block h-4 w-1/5"></span>
        </div>
      </div>
    </div>
  )
}

export default LoadingPropertyCard
