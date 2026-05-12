import React from "react";
import Navbar from "../../components/Navbar";

const StudentDashbord = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-4 px-4">
        <h1 className="text-2xl font-semibold text-center">
          Student Dashboard
        </h1>
      </main>

    </div>
  );
};

export default StudentDashbord;