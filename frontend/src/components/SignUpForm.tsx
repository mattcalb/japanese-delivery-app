import z from "zod"
import { FormContainer } from "./ui/FormContainer";
import { InputField } from "./ui/InputField";
import { EnvelopeIcon, PhoneIcon, UserIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/Button";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/;
const phoneRegex = /^\+?[1-9]\d{7,14}$/;
const zipCodeRegex = /^\d{5}(-\d{4})?$/;

const signUpFormSchema = z.object({
  email: z.email("Invalid email format")
  .nonempty("Email cannot be blank"),

  password: z.string()
    .nonempty("Password cannot be blank")
    .min(8, "Password must be at least 8 characters long")
    .regex(passwordRegex, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%)")
    .max(256, "Password must be at most 256 characters long"),
    
  name: z.string()
    .nonempty("Name cannot be blank")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Invalid characters")
    .max(50, "Name must be at most 50 characters long"),

  street: z.string().nonempty("Street name cannot be blank")
    .max(50, "Street name must be at most 50 characters long"),
    
  number: z.coerce.number()
  .min(1, "Street number cannot be blank")
  .positive("Street number must be greater than 0")
  .int("Street number must be an integer"),

  zip: z.string()
  .nonempty("ZIP code cannot be blank")
  .regex(zipCodeRegex, "Invalid ZIP code"),

  phone: z.string()
    .nonempty("Phone number cannot be blank")
    .regex(phoneRegex, "Invalid phone number")
})

type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export function SignUpForm() {

  const handleSubmit = (data: SignUpFormSchema) => {
    console.log(data);
  }

  return (
    <FormContainer<SignUpFormSchema>
      schema={signUpFormSchema}
      defaultValues={{
        email: '',
        password: '',
        name: '',
        street: '',
        number: undefined,
        zip: '',
        phone: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ register, formState: { errors } }) => (
        <div className="flex flex-col space-y-4 w-full h-full shadow-lg p-5">
          <div className="flex flex-col space-y-4 items-center text-center">
            <span className="text-2xl font-semibold">Sign up for SUSHIRO</span>
          </div>
          <InputField
            label="Name"
            name="name"
            placeholder="John Doe"
            Icon={UserIcon}
            register={register}
            error={errors.name?.message}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="name@example.com"
            Icon={EnvelopeIcon}
            register={register}
            error={errors.email?.message}
          />
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <div className="w-xl">
                <InputField
                  label="Street"
                  name="street"
                  Icon={MapPinIcon}
                  placeholder="Sakura Street"
                  register={register}
                  error={errors.street?.message}
                />
              </div>
              <div className="w-xs">
                <InputField
                  label="Number"
                  name="number"
                  type="number"
                  placeholder="10"
                  register={register}
                  error={errors.number?.message}
                />
              </div>
            </div>
            <div>
              <InputField
                label="ZIP code"
                name="zip"
                Icon={MapPinIcon}
                placeholder="90210-1234"
                register={register}
                error={errors.zip?.message}
              />
            </div>
          </div>
          <InputField
            label="Phone number"
            name="phone"
            type="number"
            placeholder="19990007890"
            Icon={PhoneIcon}
            register={register}
            error={errors.phone?.message}
          />
          <div className="flex flex-col space-y-1">
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              Icon={LockClosedIcon}
              register={register}
              error={errors.password?.message}
            />
            <p className="text-xs text-gray-700">
              Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character (!@#$%).
            </p>
          </div>
          <div className="flex flex-col space-y-4 mt-4">
            <Button
              label="SIGN UP"
              variety="primaryBtn"
              type="submit"
            />
          </div>
        </div>
      )}
    </FormContainer>
  )
}
