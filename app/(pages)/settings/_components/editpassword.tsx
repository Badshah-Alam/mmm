"use client";
import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { z } from "zod";
const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current Password is required"),
    newPassword: z
      .string()
      .min(8, "New Password must be at least 8 characters long")
      .regex(/[A-Z]/, "New Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "New Password must contain at least one lowercase letter")
      .regex(/\d/, "New Password must contain at least one digit")
      .regex(
        /[!@#$%^&*]/,
        "New Password must contain at least one special character"
      ),
    repeatPassword: z.string().min(1, "Repeat Password is required"),
  })
  .refine((data) => data.newPassword === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

const EditPasswordForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({
    currentPassword: "current Password is required",
    newPassword: "new Password is required",
    repeatPassword: "repeat Password is required",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    try {
      passwordSchema.parse({
        ...formData,
        [id]: value,
      });
      setErrors((prev) => ({ ...prev, [id]: "" }));
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldError = err.errors.find((error) => error.path[0] === id);
        setErrors((prev) => ({
          ...prev,
          [id]: fieldError ? fieldError.message : "",
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      passwordSchema.parse(formData);
      setErrors({});
      alert("Password changed successfully!");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            newErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };
  return (
    <div className="lg:w-96 md:w-72 border shadow-sm bg-[#fafafa]">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <a
            href="/settings"
            className="text-sm border py-2 px-4 rounded hover:bg-black hover:text-white transition-colors"
          >
            Cancel
          </a>
        </div>

        <div className="px-8 py-8 space-y-6">
          <div>
            <label
              htmlFor="currentPassword"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Current Password:
            </label>
            <div className="relative">
              <input
                id="currentPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Current Password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-400"
                value={formData.currentPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <BiShow size={24} /> : <BiHide size={24} />}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-red-500 text-sm">{errors.currentPassword}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              New Password:
            </label>
            <div className="relative">
              <input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter New Password (8+char)"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-400"
                value={formData.newPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showNewPassword ? <BiShow size={24} /> : <BiHide size={24} />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-sm">{errors.newPassword}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="repeatPassword"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Repeat New Password:
            </label>
            <div className="relative">
              <input
                id="repeatPassword"
                type={showRepeatPassword ? "text" : "password"}
                placeholder="Repeat New Password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-400"
                value={formData.repeatPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showRepeatPassword ? (
                  <BiShow size={24} />
                ) : (
                  <BiHide size={24} />
                )}
              </button>
            </div>
            {errors.repeatPassword && (
              <p className="text-red-500 text-sm">{errors.repeatPassword}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-[#f6b781] text-white font-medium rounded-md shadow hover:bg-orange-500 transition"
            >
              Change Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPasswordForm;

