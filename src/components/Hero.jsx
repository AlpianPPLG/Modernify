const Hero = () => {
  return (
    // Hero Section Modern Design, Dengan Dua Button, Get Started Dan Learn More
    <div id="home" className="">
      <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-black m-1 font-black leading-10">
              Lets not stress for
              <span className="m-2 text-violet-800 dark:text-violet-500">
                Website
              </span>
              designs.
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-black  font-normal text-center text-xl">
              A Community build tailwind component library.
            </p>
            <div className="mt-10 w-full flex justify-center items-center">
              <input
                className="w-full p-3 rounded-md rounded-r-none border border-gray-300 placeholder-current dark:bg-gray-500  dark:text-gray-300 dark:border-none"
                type="text"
                placeholder="Cari sesuatu"
              />
              <button className="ml-2 bg-violet-800 dark:bg-violet-500 hover:bg-violet-700 dark:hover:bg-violet-600 text-white font-bold py-3 sm:py-4 px-4 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
