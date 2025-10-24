import { z } from "zod";
import { FormContainer } from "./ui/FormContainer";
import { InputField } from "./ui/InputField";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/Button";
import dark from '../assets/fishDark.svg';
import { Link } from "react-router";

const loginFormSchema = z.object({
  email: z.email().nonempty("Email cannot be blank"),
  password: z.string().nonempty("Password cannot be blank"),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export function LoginForm() {

  const handleSubmit = (data: LoginFormSchema) => {
    console.log(data);
  }

  return (
    <FormContainer<LoginFormSchema>
      schema={loginFormSchema}
      defaultValues={{
        email: '',
        password: ''
      }}
      onSubmit={handleSubmit}
    >
      {({ register, formState: { errors } }) => (
        <div className="flex flex-col space-y-4 w-full h-full shadow-lg p-5">
          <div className="flex flex-col space-y-4 items-center text-center">
            <img src={dark} alt="Dark logo" className="w-14 h-14" />
            <span className="text-3xl font-semibold">Welcome Back!</span>
            <p className="text-sm">Please enter your account details</p>
          </div>
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            Icon={EnvelopeIcon}
            register={register}
            error={errors.email?.message}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            Icon={LockClosedIcon}
            register={register}
            error={errors.password?.message}
          />
          <div className="flex flex-col space-y-4 mt-4">
            <Button
              label="SIGN IN"
              variety="primaryBtn"
              type="submit"
            />
          </div>
          <div className="text-center text-sm">
            <span className="text-center">Don't have an account? </span>
            <Link to="/signup" className="text-link underline">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </FormContainer>
  )
}
