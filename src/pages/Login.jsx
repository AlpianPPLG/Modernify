import { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // State untuk mengontrol visibilitas password
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle visibilitas password
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"} // Show or hide password
                id="password"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="********"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
              >
                {passwordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3c-4.418 0-8 4-8 4s3.582 4 8 4 8-4 8-4-3.582-4-8-4zm0 1c1.16 0 2.22.373 3.07 1.002C8.813 6.534 5.393 8 2 10c2.833 2.046 6.212 3.464 8.999 4.001A7.351 7.351 0 0110 15c-3.021 0-5.759-1.785-7.572-4.446A4.992 4.992 0 007 10c0 1.551.805 2.902 2.034 3.707C8.72 13.158 8.363 14 8 14c-.171 0-.338-.014-.5-.041a1 1 0 10-.158 1.986C8.57 16.966 9.371 17 10 17c4.418 0 8-4 8-4s-3.582-4-8-4a7.351 7.351 0 00-3.07.645C7.22 7.373 8.28 7 10 7a7.351 7.351 0 013.07.645A4.992 4.992 0 0010 5z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3c-4.418 0-8 4-8 4s3.582 4 8 4 8-4 8-4-3.582-4-8-4zm0 1c1.16 0 2.22.373 3.07 1.002C8.813 6.534 5.393 8 2 10c2.833 2.046 6.212 3.464 8.999 4.001A7.351 7.351 0 0110 15c-3.021 0-5.759-1.785-7.572-4.446A4.992 4.992 0 007 10c0 1.551.805 2.902 2.034 3.707C8.72 13.158 8.363 14 8 14c-.171 0-.338-.014-.5-.041a1 1 0 10-.158 1.986C8.57 16.966 9.371 17 10 17c4.418 0 8-4 8-4s-3.582-4-8-4a7.351 7.351 0 00-3.07.645C7.22 7.373 8.28 7 10 7a7.351 7.351 0 013.07.645A4.992 4.992 0 0010 5z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                className="ml-2 block text-sm text-gray-800"
                htmlFor="remember"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white hover:bg-indigo-700 font-semibold py-2 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signin")} // Navigasi ke halaman Sign In
            className="text-indigo-600 hover:text-indigo-500 font-semibold"
          >
            Sign up
          </button>
        </p>
        <button
          onClick={() => navigate("/")} // Navigasi kembali ke halaman utama
          className="mt-4 w-full bg-gray-300 text-gray-700 hover:bg-gray-400 font-semibold py-2 rounded-md transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;
