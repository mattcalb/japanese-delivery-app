import { NavLink } from "react-router";

interface CustomNavLinkProps {
  label: string | undefined;
  to: string;
}

export function CustomNavLink ({ label, to }: CustomNavLinkProps) {

  return (
    <NavLink 
    to={to}
    className={({isActive}) =>
      isActive ? 'underline underline-offset-3 decoration-2' : ''
  }
    >
      {label}
    </NavLink>
  )
}
