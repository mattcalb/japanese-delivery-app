import { LoginForm } from '../components/LoginForm';

export function Login() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <section className="flex-1 bg-[url('src/assets/bg_login.jpg')] bg-center bg-cover not-lg:min-h-[250px]">
      </section>

      <section className="flex-1 w-full flex items-center justify-center not-lg:py-5 py-14 px-5">
        <div className="w-full max-w-xl">
          <LoginForm />
        </div>
      </section>
    </div>
  )
}
