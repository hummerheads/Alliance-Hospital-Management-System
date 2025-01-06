import { useState, useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(formData.email, formData.password);
      Swal.fire("Success", "Login successful!", "success");
      navigate("/dashboard"); // Redirect to dashboard or any protected route
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-600">
          Sign in to access your account
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
