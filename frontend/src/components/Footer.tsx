import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Logo } from "./ui/Logo";

export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-black text-white px-20 py-4">
      <div className="flex flex-col items-center justify-between space-y-4">
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          <Logo variety="light"/>
          <p className="text-center">The Art of Sushi. Perfected.</p>
          <div className="flex not-md:flex-col not-md:space-y-4 space-x-4">
            <div className="flex items-center space-x-1">
              <PhoneIcon className="w-5 h-5" />
              <span>(999) 000-1234</span>
            </div>
            <div className="flex items-center space-x-1">
              <EnvelopeIcon className="w-5 h-5" />
              <span>contact@sushiro.com</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white p-2">
          <span>© 2025 SUSHIRO. All rights reserved.</span>
        </div>
      </div>
    </footer >
  )
}
