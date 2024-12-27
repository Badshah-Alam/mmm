
import React, { useState } from "react";
import { z } from "zod";
const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .min(5, "Email should be at least 5 characters long")
  .max(50, "Email should be less than 50 characters")
  .refine((email) => email.includes("@"), {
    message: "Email must contain '@'.",
  })
  .refine((email) => email.includes("."), {
    message: "Email must contain a '.'",
  });
interface ErrorForEmail {
  message: string;
}

const EditEmailFrom: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const [error, setError] = useState<ErrorForEmail | null>({
    message: "Email is required",
  });
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const validation = emailSchema.safeParse(newEmail);
    if (validation.success) {
      setError(null);
    } else {
      setError({ message: validation.error.errors[0].message });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = emailSchema.safeParse(email);
    if (result.success) {
      console.log("Email changed to:", email);
      setError(null);
    } else {
      setError({ message: result.error.errors[0].message });
    }
  };

  return (
    <div className="bg-[#fafafa] lg:w-96   md:w-72 border-gray-300 shadow-sm">
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800">Change Email</h2>
        <button className="text-gray-500 bg-white hover:text-white hover:bg-black transition-colors text-sm border  py-2 px-4 rounded" >
       <a href="/settings">Cancel</a>
        </button>
      </div>

      <div className="px-6 py-4">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              New Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter new email"
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm  mb-2 text-sm font-medium text-gray-600"
              required
              name="email"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#f6b781] text-white font-medium rounded-md shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          >
            Change Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmailFrom;
