const Testimony = () => {
  return (
    <section aria-labelledby="testimonial-title">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2
            id="testimonial-title"
            className="text-3xl font-bold tracking-tight text-center sm:text-4xl"
          >
            What our customers say
          </h2>

          <blockquote className="flex flex-col items-center p-4 mt-10">
            <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">
              I recently used this website for a purchase and I was extremely
              satisfied with the ease of use and the variety of options
              available. The checkout process was seamless and the delivery was
              prompt.
            </p>
            <footer className="flex items-center gap-3 mt-6 md:mt-12">
              <img
                className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
                src="https://loremflickr.com/g/200/200/girl"
                alt="Sebastiaan Kloos"
                loading="lazy"
              />
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold tracking-tight"
              >
                <p>Jane Doe</p>
                <p className="font-medium text-black/60">Founder of XYZ</p>
              </a>
            </footer>
          </blockquote>

          <blockquote className="flex flex-col items-center p-4 mt-10">
            <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">
              I recently used this website for a purchase and I was extremely
              satisfied with the ease of use and the variety of options
              available. The checkout process was seamless and the delivery was
              prompt.
            </p>
            <footer className="flex items-center gap-3 mt-6 md:mt-12">
              <img
                className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
                src="https://loremflickr.com/g/200/200/girl"
                alt="Sebastiaan Kloos"
                loading="lazy"
              />
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold tracking-tight"
              >
                <p>Jane Doe</p>
                <p className="font-medium text-black/60">Founder of XYZ</p>
              </a>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
