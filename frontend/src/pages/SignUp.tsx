import { Link } from "react-router";
import { SignUpForm } from "../components/SignUpForm";

export function SignUp() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <section className="flex-1 bg-[url('/bg_signup.jpg')] bg-center bg-cover not-lg:min-h-[250px]">
        <div className="w-full flex not-lg:py-5 py-14 px-5 lg:justify-center">
          <div className="flex flex-col space-y-4 text-white">
            <div className="lg:hidden text-sm">
              <span className="text-center">Already have an account? </span>
              <Link to="/login" className="text-link underline">
                Sign In
              </Link>
            </div>
            <h1 className="lg:text-3xl font-medium text-xl">Create your account</h1>
            <p className="not-lg:text-sm">
              Sign up to order your favorite sushi faster and save your preferences.
            </p>
          </div>
        </div>
      </section>

      <section className="flex-1 flex min-w-0 items-center justify-center not-lg:py-5 py-14 px-5 relative">
        <div className="absolute not-lg:hidden right-5 top-5 text-sm">
          <span className="text-center">Already have an account? </span>
          <Link to="/login" className="text-link underline">
            Sign In
          </Link>
        </div>
        <div className="w-full max-w-xl h-full">
          <SignUpForm />
        </div>
      </section>
    </div>
  );
}
