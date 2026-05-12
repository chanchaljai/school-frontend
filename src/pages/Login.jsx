import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://school-backend-ykt1.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        if (data.message === "Invalid email or password") {
          alert("User not registered or wrong credentials");
          navigate("/register");
          return;
        }
      }

      const role = data.user.role;

      localStorage.setItem("token", data.token);

      if (role === "student") navigate("/student");
      else if (role === "teacher") navigate("/teacher");
      else if (role === "admin") navigate("/admin");
      else if (role === "accountant") navigate("/accountant");

    } catch (err) {
      console.log(err);
      alert("Server error");
      navigate("/register");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100 dark:bg-gray-800 px-4">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 space-y-4"
      >

        <h2 className="text-3xl font-bold text-center text-black dark:text-white">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white w-full p-3 rounded-lg font-semibold"
        >
          Login
        </button>

        <p
          onClick={() => navigate("/register")}
          className="text-center text-blue-600 cursor-pointer hover:underline"
        >
          Don't have an account? Register
        </p>

      </form>
    </div>
  );
}

export default Login;