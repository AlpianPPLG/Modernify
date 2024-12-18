const About = () => {
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
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/src/img/faizur-rehman-GZGWL8wFFuI-unsplash.jpg"
            alt="About Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
