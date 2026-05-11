import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDashbord from "./roles/student/StudentDashbord";
import AdminDashbord from "./roles/admin/AdminDashbord";
import TeacherDashbord from "./roles/teacher/TeacherDashbord";
import AccountantDashbord from "./roles/accountant/AccountantDashbord";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      // role based routes
      <Route path="/student" element={<StudentDashbord />} />
      <Route path="/admin" element={<AdminDashbord />} />
      <Route path="/teacher" element={<TeacherDashbord />} />
      <Route path="/accountant" element={<AccountantDashbord />} />
    </Routes>
  );
};

export default App;
