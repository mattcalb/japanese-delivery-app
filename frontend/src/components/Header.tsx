import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import { CustomNavLink } from "./ui/CustomNavLink";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { Button } from "./ui/Button";

export function Header() {

  const [shouldOpenMobileMenu, setShouldOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setShouldOpenMobileMenu((prev) => !prev);
  }

  const handleCloseMobileMenu = () => {
    setShouldOpenMobileMenu(false);
  }

  return (
    <header className="py-3 fixed top-0 left-0 w-full z-10 flex lg:justify-between lg:px-20 px-4 h-(--header-height) items-center bg-white shadow-md">
      <div
        onClick={handleOpenMobileMenu}
        className="lg:hidden cursor-pointer">
        <Bars3Icon className="w-8 h-8" />
      </div>
      <div className="not-lg:w-full flex items-center justify-center">
        <MobileMenu shouldOpenMenu={shouldOpenMobileMenu} closeMenu={handleCloseMobileMenu} />
        <h1 className="text-3xl font-semibold">SUSHIRO</h1>
      </div>
      <nav className="lg:flex space-x-10 hidden">
        <CustomNavLink label="HOME" to="/" />
        <CustomNavLink label="MENU" to="/menu" />
        {/*<CustomNavLink label="ABOUT US" to="/about" />*/}
      </nav>
      <div className="hidden lg:flex space-x-10 items-center">
        <Link to="#">
          <ShoppingBagIcon className="w-8 h-8" />
        </Link>
        <Link to="/login">
          <Button label="SIGN IN" variety="secondaryBtn" />
        </Link>
      </div>
    </header>
  )
}
