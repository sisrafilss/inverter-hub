import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    // Simulate a login attempt and error handling
    if (data.password !== "correct_password") {
      setLoginError("Incorrect password. Please try again.");
    } else {
      setLoginError("");
      console.log("Login successful");
      // Redirect or perform post-login actions here
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In");
    // Implement Google Sign-In logic here
  };

  const handleGithubSignIn = () => {
    console.log("GitHub Sign-In");
    // Implement GitHub Sign-In logic here
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            To get the full benefits of our website, please log in. Enjoy
            exclusive content, personalized features, and much more.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {loginError && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>{loginError}</span>
                </div>
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: "Email is required" })}
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
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
