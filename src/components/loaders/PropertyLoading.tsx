const PropertyLoading = () => {
  return (
    <div className="mx-auto mb-6 max-w-[1248px] overflow-hidden sm:mb-0 lg:mt-6 lg:flex lg:h-[752px] lg:gap-x-6 lg:px-6">
      <div className="mb-1 aspect-[16/10] w-full animate-loading lg:h-full lg:w-1/2 lg:rounded-3xl"></div>
      <div className="lg:w-full">
        <div className="flex items-center gap-x-2 border-b p-4 md:px-6 lg:border-none lg:px-0">
          <span className="block animate-loading rounded-full p-5"></span>
          <span className="block animate-loading rounded-full p-5"></span>
          <span className="block animate-loading rounded-full p-5"></span>
        </div>

        <div className="p-4 md:p-6 lg:px-0">
          <span className="mb-2 block h-8 w-full animate-loading sm:w-1/2"></span>
          <span className="mb-10 block h-3 w-2/5 animate-loading"></span>

          <div className="flex gap-x-4">
            <span className="mb-2 block h-4 w-2/5 animate-loading"></span>
            <span className="mb-10 block h-4 w-1/6 animate-loading"></span>
          </div>

          <span className="mb-10 block h-12 w-full animate-loading"></span>

          <div className="mb-6">
            <span className="mb-2 block h-3 animate-loading"></span>
            <span className="mb-2 block h-3 animate-loading"></span>
            <span className="mb-6 block h-3 w-1/2 animate-loading"></span>
            <span className="block h-8 w-2/5 animate-loading"></span>
          </div>

          <div className="sm:mb-8 sm:flex sm:gap-x-2">
            <div className="mb-10 sm:mb-0 sm:w-1/2">
              <span className="mb-6 block h-5 w-1/2 animate-loading"></span>
              <span className="mb-4 block h-3 w-2/5 animate-loading"></span>
              <span className="mb-4 block h-3 w-2/5 animate-loading"></span>
              <span className="mb-6 block h-3 w-2/5 animate-loading"></span>
              <span className="block h-8 w-2/5 animate-loading"></span>
            </div>

            <div className="mb-10 sm:mb-0 sm:w-1/2">
              <span className="mb-6 block h-5 w-1/2 animate-loading"></span>
              <span className="mb-4 block h-3 w-2/5 animate-loading"></span>
              <span className="mb-4 block h-3 w-2/5 animate-loading"></span>
              <span className="mb-6 block h-3 w-2/5 animate-loading"></span>
              <span className="block h-8 w-2/5 animate-loading"></span>
            </div>
          </div>
          <div className="flex gap-x-2">
            <span className="block h-12 w-9/12 animate-loading"></span>
            <span className="block h-12 w-3/12 animate-loading"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyLoading
