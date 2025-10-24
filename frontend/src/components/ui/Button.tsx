import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variety?: "primaryBtn" | "secondaryBtn";
  isSelected?: boolean;
  onClick?: () => void;
}

export function Button({ label, variety, isSelected, onClick }: ButtonProps) {

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-sm px-5 py-3 outline-0 h-14 ${variety} 
      ${variety === 'primaryBtn' && !isSelected ? 'hover:secondaryBtn duration-200' : 'hover:primaryBtn duration-200'}`}>
      {label}
    </button>
  )
}
