import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  // use state functions to enhance dynamic updates to the form and enhance the form validation and submission
  interface formData {
    name: string;
    email: string;
    password: string;
  }
  
  interface errors {
   
    email?: string;
    password?: string;
  }
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "PassworPassword must be at least 6 characters";
    }
    return newErrors;
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({ email: "", password: "", remember: false });
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-2 tracking-wider">
          Welcome Back!
        </h1>
        <h3 className="text-sm font-semibold text-center mb-8 tracking-wider">
          Please sign in to your account
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded w-full p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-500 transition duration-200`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded w-full p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-500 transition duration-200`}
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && (
              <p id="password-error" className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>
         <div className="flex justify-between">
         <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember Me
            </label>
          </div>
          <div>
            <a href="" className="text-sm text-teal-600 hover:underline">Forget Password?</a>
          </div>
         </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-teal-600 text-white cursor-pointer font-bold tracking-wider rounded p-2 mt-4 ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-teal-700"
            } transition duration-300 ease-in-out`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <NavLink to="/signUp" className="text-teal-600 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
