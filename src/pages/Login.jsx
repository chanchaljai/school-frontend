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
      // 🔥 backend call (example)
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message === "Invalid email or password") {
          alert("User not registered or wrong credentials");
          navigate("/register"); // 👈 register page pe bhej do
          return;
        }
      }

      // 🧠 role backend se aayega
      const role = data.user.role;

      // 💾 store token (optional)
      localStorage.setItem("token", data.token);

      // 🎯 role based redirect
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
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="p-5 shadow-md w-80 space-y-3">
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />

        <button className="bg-blue-600 text-white w-full p-2">Login</button>
      </form>
    </div>
  );
}

export default Login;
