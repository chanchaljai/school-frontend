import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Register successful");
        navigate("/login"); // login page
      } else {
        alert(data.message || "Error");
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        style={styles.input}
      />

      {/* Role select */}
      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        style={styles.input}
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="accountant">Accountant</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleRegister} style={styles.button}>
        Register
      </button>

      <p onClick={() => navigate("/login")} style={styles.link}>
        Already registered? Login
      </p>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    background: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  link: {
    cursor: "pointer",
    color: "green",
    textAlign: "center",
  },
};

export default Register;