import React, { ChangeEvent, FormEvent } from "react";

const SignUp = () => {

    interface formData {
        name: string;
        email: string;
        password: string;
      }
      
      interface errors {
        name?: string;
        email?: string;
        password?: string;
        [key: string]: string | undefined;
      }

    const [formData, setFormData] = React.useState<formData>({
        name: '',
        email: '',
        password: '',
      });
      const [errors, setErrors] = React.useState<errors>({});
      const [isSubmitting, setIsSubmitting] = React.useState(false);

      const validateForm = (): errors => {
        const newErrors: errors = {};
        if (!formData.name) {
          newErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        }
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
          newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
      };

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
        if (errors[name]) {
          setErrors((prev) => ({ ...prev, [name]: '' }));
        }
      };

      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
        setIsSubmitting(true);
        setTimeout(() => {
          console.log('Form submitted:', formData);
          setIsSubmitting(false);
          setFormData({ name: '', email: '', password: '' });
        }, 1000);
      };

      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-semibold text-center mb-2 tracking-wider">
              Create Your Account
            </h1>
            <h3 className="text-[13px] text-gray-600 text-center mb-8 tracking-wider">
              Please fill in your details to sign up
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  autoComplete="name"
                  className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded w-full p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-500 transition duration-200`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  autoComplete="email"
                  className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded w-full p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-500 transition duration-200`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
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
                  autoComplete=""
                  className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded w-full p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-teal-500 transition duration-200`}
                  aria-invalid={errors.password ? 'true' : 'false'}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                {errors.password && (
                  <p id="password-error" className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-teal-600 text-white cursor-pointer font-bold tracking-wider rounded p-2 mt-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-700'} transition duration-300 ease-in-out`}
              >
                {isSubmitting ? 'Signing up...' : 'Sign Up'}
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-teal-600 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      );
};
export default SignUp;
