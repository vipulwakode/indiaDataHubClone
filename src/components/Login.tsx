import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    if (email === "admin@example.com" && password === "admin123") {
      login();
      navigate("/product-catalogue");
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 rounded-lg flex flex-col items-center">
        <div className="flex items-center justify-center rounded-full w-12 h-12 bg-[rgb(28,20,99)]">
          <FaLock className="text-1xl text-white mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>

        <form onSubmit={handleLogin} className="space-y-4 w-full">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              autoComplete="off"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="admin123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[rgb(16,24,60)] text-white py-2 rounded hover:bg-[#5856d6] transition font-normal"
          >
            Sign In
          </button>
          <div className="flex justify-between">
            <button className="underline font-normal">Forgot Password?</button>
            <button className="underline font-normal">
              Don't have an account?Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
