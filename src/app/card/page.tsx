"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

function CardPage() {
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    city: "Kant",
    country: "Kyrgyzstan",
    address: "Pushkina",
    zip: "72300",
    phone: "707888888",
    email: "admin@gmail.com",
  });
  const router = useRouter();

  const handleSubmit = async () => {
    const bodyFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      bodyFormData.append(key, value as string);
    });

    try {
      const res = await axios.request({
        method: "POST",
        url: "/api/card",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
      setIsModalOpen(false); // Close the modal after submission
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="border-2 border-black text-black font-semibold py-3 px-6 rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out transform"
      >
        Create
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              onClick={() => setIsModalOpen(false)}
            />
            {/* Modal Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 bg-white rounded-lg shadow-lg p-8 max-w-lg w-full"
            >
              <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className={clsx(
                    "bg-zinc-200 px-4 py-3 block w-full",
                    "focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-md"
                  )}
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className={clsx(
                    "bg-zinc-200 px-4 py-3 block w-full",
                    "focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-md"
                  )}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className={clsx(
                    "bg-zinc-200 px-4 py-3 block w-full",
                    "focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-md"
                  )}
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP Code"
                  value={formData.zip}
                  onChange={handleChange}
                  className={clsx(
                    "bg-zinc-200 px-4 py-3 block w-full",
                    "focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-md"
                  )}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={clsx(
                    "bg-zinc-200 px-4 py-3 block w-full",
                    "focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-md"
                  )}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={clsx(
                    "bg-zinc-200 px-4 py-3 block w-full",
                    "focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-md"
                  )}
                />
              </div>
              {error && (
                <div className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
                  {error}
                </div>
              )}
              <div className="flex justify-end mt-6 space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CardPage;
