import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apa itu Modernify?",
      answer:
        "Modernify adalah platform yang menyediakan solusi desain web modern untuk membantu bisnis Anda bersinar.",
    },
    {
      question: "Bagaimana cara menghubungi tim dukungan?",
      answer:
        "Anda dapat menghubungi tim dukungan kami melalui formulir kontak di website atau melalui email di support@modernify.com.",
    },
    {
      question: "Apakah ada biaya untuk menggunakan layanan ini?",
      answer:
        "Kami menawarkan berbagai paket layanan, termasuk opsi gratis dan berbayar. Silakan kunjungi halaman harga untuk detail lebih lanjut.",
    },
    {
      question: "Dapatkah saya membatalkan langganan saya?",
      answer:
        "Ya, Anda dapat membatalkan langganan kapan saja melalui pengaturan akun Anda.",
    },
    {
      question: "Apakah ada pelatihan yang tersedia?",
      answer:
        "Kami menyediakan dokumentasi lengkap dan tutorial video untuk membantu Anda memulai. Anda juga dapat menghubungi tim dukungan untuk bantuan lebih lanjut.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-gray-600">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 p-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
