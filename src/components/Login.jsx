import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover -z-20"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/GB-en-20260112-TRIFECTA-perspective_c6f7d970-d5ea-4140-9669-dca2611e70c0_small.jpg"
        alt="background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Sign In and Sign Up Form */}
      <form className="absolute p-12  w-3/12 my-36 bg-black/50 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}

        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          c
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer underline" onClick={toggleSignInFrom}>
          {isSignInForm
            ? "Already registered? Sign In Now"
            : "  New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
