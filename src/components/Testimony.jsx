import { useState, useEffect } from "react"; // Import useState dan useEffect
import { Helmet } from "react-helmet"; // Import Helmet untuk SEO

const Testimony = () => {
  const [reviews, setReviews] = useState([]); // State untuk menyimpan ulasan
  const [name, setName] = useState(""); // State untuk nama
  const [position, setPosition] = useState(""); // State untuk posisi
  const [comment, setComment] = useState(""); // State untuk ulasan
  const [editIndex, setEditIndex] = useState(null); // State untuk mengedit ulasan

  // Dummy data ulasan
  const dummyReviews = [
    {
      name: "Jane Doe",
      position: "Founder of XYZ",
      comment:
        "I recently used this website for a purchase and I was extremely satisfied with the ease of use and the variety of options available. The checkout process was seamless and the delivery was prompt.",
    },
    {
      name: "John Smith",
      position: "CEO of ABC Corp",
      comment:
        "This is a fantastic service! I had an amazing experience, and I will definitely recommend it to others.",
    },
  ];

  // Mengambil ulasan dari localStorage saat komponen dimuat
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    if (savedReviews.length === 0) {
      localStorage.setItem("reviews", JSON.stringify(dummyReviews));
      setReviews(dummyReviews);
    } else {
      setReviews(savedReviews);
    }
  }, []);

  // Menyimpan atau memperbarui ulasan
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, position, comment };
    let updatedReviews;

    if (editIndex !== null) {
      // Jika dalam mode edit
      updatedReviews = reviews.map((review, index) =>
        index === editIndex ? newReview : review
      );
    } else {
      // Jika menambah ulasan baru
      updatedReviews = [...reviews, newReview];
    }

    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    // Reset form
    setName("");
    setPosition("");
    setComment("");
    setEditIndex(null);
  };

  // Menghapus ulasan
  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  // Memasukkan data ulasan ke dalam form untuk diedit
  const handleEdit = (index) => {
    const reviewToEdit = reviews[index];
    setName(reviewToEdit.name);
    setPosition(reviewToEdit.position);
    setComment(reviewToEdit.comment);
    setEditIndex(index);
  };

  return (
    <>
      <Helmet>
        <title>Testimonials - Your Website Name</title>
        <meta
          name="description"
          content="Read what our customers say about us."
        />
        <meta
          name="keywords"
          content="testimonials, customer feedback, reviews"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section aria-labelledby="testimonial-title">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2
              id="testimonial-title"
              className="text-3xl font-bold tracking-tight text-center sm:text-4xl"
            >
              What our customers say
            </h2>

            <div className="mt-10">
              {reviews.map((review, index) => (
                <blockquote
                  key={index}
                  className="flex flex-col items-center p-4 mt-6 bg-gray-100 rounded-md"
                >
                  <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">
                    "{review.comment}"
                  </p>
                  <footer className="flex items-center gap-3 mt-6 md:mt-12">
                    <div className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10 flex items-center justify-center">
                      <span className="text-xl font-bold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div className="inline-block font-bold tracking-tight">
                      <p>{review.name}</p>
                      <p className="font-medium text-black/60">
                        {review.position}
                      </p>
                    </div>
                  </footer>
                  <div className="mt-4 flex space-x-4">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </blockquote>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-10 bg-white p-6 rounded shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">
                {editIndex !== null ? "Edit Your Review" : "Add Your Review"}
              </h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Review"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white hover:bg-blue-700 font-semibold py-2 rounded-md transition duration-200"
              >
                {editIndex !== null ? "Update Review" : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimony;
