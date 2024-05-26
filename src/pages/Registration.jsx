import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [registrationError, setRegistrationError] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    // Simulate registration and error handling
    if (data.password !== data.confirmPassword) {
      setRegistrationError('Passwords do not match. Please try again.');
    } else {
      setRegistrationError('');
      console.log('Registration successful');
      // Redirect or perform post-registration actions here
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-In');
    // Implement Google Sign-In logic here
  };

  const handleGithubSignIn = () => {
    console.log('GitHub Sign-In');
    // Implement GitHub Sign-In logic here
  };

  const password = watch('password', '');

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse  w-full mx-auto">
        <div className="text-center lg:text-left  px-4">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Join us today and get full access to exclusive content and personalized features.
          </p>
        </div>
        <div className="card w-full max-w-md shadow-2xl bg-base-100 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {registrationError && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>{registrationError}</span>
                </div>
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                {...register('confirmPassword', { required: 'Please confirm your password' })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
              {watch('confirmPassword') && watch('confirmPassword') !== password && (
                <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <div className="form-control mt-4">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-accent flex items-center"
              >
                <FcGoogle className="mr-2" /> Sign in with Google
              </button>
            </div>
            <div className="form-control mt-2">
              <button
                type="button"
                onClick={handleGithubSignIn}
                className="btn btn-outline btn-neutral flex items-center"
              >
                <FaGithub className="mr-2" /> Sign in with GitHub
              </button>
            </div>
          </form>
          <div className="text-center mt-0 pb-8">
            <p>
              Already registered? <Link to="/login" className="text-blue-500">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
