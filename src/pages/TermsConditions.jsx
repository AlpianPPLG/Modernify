import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-gray-700 mb-4">Effective Date: January 1, 2024</p>
      <p className="text-gray-700 mb-4">
        These terms and conditions outline the rules and regulations for the use
        of our website and services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Acceptance of Terms</h2>
      <p className="text-gray-700 mb-4">
        By accessing this website, you agree to be bound by these terms and
        conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of the Site</h2>
      <p className="text-gray-700 mb-4">
        You may not use the site for any unlawful purpose or in a way that
        violates any applicable laws or regulations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Limitation of Liability
      </h2>
      <p className="text-gray-700 mb-4">
        In no event shall we be liable for any damages arising from the use of
        this site or any services provided.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Modifications</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to modify these terms at any time. Changes will be
        effective immediately upon posting.
      </p>

      <button
        onClick={() => navigate(-1)} // Navigasi kembali ke halaman sebelumnya
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
      >
        Kembali
      </button>
    </div>
  );
};

export default TermsConditions;
