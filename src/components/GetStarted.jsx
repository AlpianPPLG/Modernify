import { useEffect, useState } from "react";

const GetStarted = () => {
  const [starsCount, setStarsCount] = useState(0);
  const [downloadsCount, setDownloadsCount] = useState(0);
  const [sponsorsCount, setSponsorsCount] = useState(0);

  const targets = [
    { setCount: setStarsCount, count: 4670 },
    { setCount: setDownloadsCount, count: 80000 },
    { setCount: setSponsorsCount, count: 100 },
  ];

  useEffect(() => {
    const maxCount = Math.max(...targets.map((target) => target.count));
    const duration = maxCount / 100; // Adjust duration based on max count

    targets.forEach((target) => {
      animateCountUp(target.setCount, target.count, duration);
    });
  }, []);

  const animateCountUp = (setCount, targetCount, duration) => {
    let currentCount = 0;
    const increment = Math.ceil(targetCount / (duration / 10));

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        clearInterval(interval);
        currentCount = targetCount;
      }
      setCount(currentCount);
    }, 10);
  };

  return (
    <>
      <section
        id="get-started"
        className="container mx-auto px-4 py-12 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to MyCompany
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Were revolutionizing the industry with innovative solutions
              tailored to your needs.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
            >
              Learn More
              <svg
                className="w-5 h-5 ml-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Industry-leading technology
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 customer support
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Customizable solutions
                </li>
              </ul>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="block text-center border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-black sm:text-4xl sm:leading-10">
              Trusted by developers
            </h2>
            <p className="mt-3 text-xl leading-7 text-black sm:mt-4">
              This package powers many production applications on many different
              hosting platforms.
            </p>
          </div>
          <div className="pb-12 mt-10 sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2"></div>
              <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                      <dt
                        className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400"
                        id="item-1"
                      >
                        Stars on GitHub
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100">
                        {starsCount}+
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                        Downloads
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100">
                        {downloadsCount}+
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                        Sponsors
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100">
                        {sponsorsCount}+
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
