import { useState, useEffect } from "react";

const images = [
  "/src/img/faizur-rehman-GZGWL8wFFuI-unsplash.jpg",
  "/src/img/2.jpg",
  "/src/img/3.jpg",
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, []);

  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We are passionate about creating modern, user-friendly web designs
            that help your business shine. Our goal is to make your ideas a
            reality through cutting-edge technology and creative design
            solutions.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
              Learn More
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-md shadow-md hover:bg-gray-300">
              Contact Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative flex justify-center">
          <img
            src={images[currentIndex]}
            alt="About Illustration"
            className="rounded-lg shadow-lg transition duration-500"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md hover:bg-opacity-75 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md hover:bg-opacity-75 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
