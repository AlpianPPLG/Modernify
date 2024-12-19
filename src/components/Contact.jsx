import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast dan ToastContainer dari react-toastify
import { Helmet } from "react-helmet"; // Import Helmet untuk SEO
import "react-toastify/dist/ReactToastify.css"; // Import CSS untuk toast notifications

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Validasi input
    if (!name || !email || !message) {
      toast.error("All fields are required."); // Tampilkan pesan error
      return;
    }

    const mailtoLink = `mailto:nova07pplg@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
      message
    )}%0D%0A%0D%0AFrom: ${email}`;

    // Membuka aplikasi email default
    window.location.href = mailtoLink;

    // Menampilkan toast notification
    toast.success("Message sent successfully!");

    // Mengosongkan kolom input
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-gray-100 py-12">
      <Helmet>
        <title>Home - Modernify</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries or feedback."
        />
        <meta name="keywords" content="contact, feedback, inquiries, support" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Have questions or feedback? Wed love to hear from you!
        </p>
        <form
          className="bg-white rounded-lg shadow-lg p-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Mengatur state untuk name
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Mengatur state untuk email
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Mengatur state untuk message
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
        {/* Toast Notification */}
        <ToastContainer /> {/* Tambahkan ToastContainer di sini */}
      </div>
    </section>
  );
};

export default Contact;
