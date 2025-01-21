import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

  // Use the REACT_APP_API_URL environment variable
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/sendEmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  // Handle custom cursor
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
  }, []);

  return (
    <div
      className={`container mx-auto p-6 ${
        theme === "dark" ? "bg-[#1A1A2E] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#000000]"
      }`}
    >
      {/* Custom Cursor */}
      <div className="cursor"></div>

      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-gray-400 mb-8">
        We'd love to hear from you. Fill out the form below, and we’ll get back to you shortly!
      </p>

      <form
        onSubmit={handleSubmit}
        className={`rounded-lg shadow-lg p-6 max-w-lg mx-auto ${
          theme === "dark" ? "bg-[#0F3460]" : "bg-[#F5F5F5]"
        }`}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full mt-2 p-3 rounded-lg border ${
              theme === "dark"
                ? "bg-[#1A1A2E] border-gray-600 text-gray-300"
                : "bg-[#FFFFFF] border-gray-300 text-gray-700"
            } focus:outline-none focus:ring-2 focus:ring-[#FF5722]`}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full mt-2 p-3 rounded-lg border ${
              theme === "dark"
                ? "bg-[#1A1A2E] border-gray-600 text-gray-300"
                : "bg-[#FFFFFF] border-gray-300 text-gray-700"
            } focus:outline-none focus:ring-2 focus:ring-[#FF5722]`}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full mt-2 p-3 rounded-lg border ${
              theme === "dark"
                ? "bg-[#1A1A2E] border-gray-600 text-gray-300"
                : "bg-[#FFFFFF] border-gray-300 text-gray-700"
            } focus:outline-none focus:ring-2 focus:ring-[#FF5722]`}
            placeholder="Enter your message"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg bg-[#FF5722] text-white font-semibold text-lg hover:bg-[#E64A19] transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="text-center text-[#FF5722] mt-4 font-medium">{status}</p>
      )}
    </div>
  );
};

export default ContactPage;

