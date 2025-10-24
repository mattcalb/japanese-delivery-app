import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CustomNavLink } from "./ui/CustomNavLink";
import { Link } from "react-router";
import { Button } from "./ui/Button";

interface MobileMenuProps {
  shouldOpenMenu: boolean;
  closeMenu: () => void;
}

export function MobileMenu({ shouldOpenMenu, closeMenu }: MobileMenuProps) {

  const baseClasses = "fixed top-0 left-0 h-screen max-w-xs w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden";

  const transitionClass = shouldOpenMenu ? 'translate-x-0' : '-translate-x-full';

  const backdropClasses = shouldOpenMenu
    ? "fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 opacity-100 lg:hidden"
    : "fixed inset-0 bg-black bg-opacity-0 z-40 transition-opacity duration-300 opacity-0 pointer-events-none lg:hidden";

  return (
    <>
      <div
        onClick={closeMenu}
        className={backdropClasses}
      />
      <div className={`${baseClasses} ${transitionClass} flex-col`}>
        <div className="flex justify-between p-4 mb-8 border-b border-light-gray">
          <div
            onClick={closeMenu}
            className="lg:hidden cursor-pointer">
            <Bars3Icon className="w-8 h-8" />
          </div>
          <XMarkIcon
            onClick={closeMenu}
            className="w-8 h-8 cursor-pointer hover:text-red-600 transition"
          />
        </div>
        <nav className="flex flex-col space-y-10 p-4">
          <CustomNavLink label="HOME" to="/" />
          <CustomNavLink label="MENU" to="/menu" />
          <Link to="#">
            <div className="flex items-center space-x-2">
              <ShoppingBagIcon className="w-6 h-6" />
              <span className="uppercase">CART</span>
            </div>
          </Link>
          <Link to="/login">
            <Button label="SIGN IN" variety="secondaryBtn" />
          </Link>
        </nav>
      </div>
    </>
  );
}
