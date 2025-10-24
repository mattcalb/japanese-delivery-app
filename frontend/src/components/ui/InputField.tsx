import type { Icon } from "../../types/icon";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: string;
  Icon?: Icon;
  placeholder?: string;
}

export function InputField<T extends FieldValues>({ label, name, type = "text", register, placeholder, Icon, error }: InputFieldProps<T>) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-sm">{label}</label>
      <div className="flex items-center relative">
        {Icon && <Icon className="w-5 h-5 absolute left-2 text-gray-600" />}
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={`pr-2 py-2 ${Icon ? 'pl-8' : 'pl-4'} w-full text-input focus:ring-1 focus:ring-neutral-400 rounded-sm shadow-xs bg-transparent outline-none border ${error ? "border-red-500" : "border-gray-300"}`}
          autoComplete="on"
        />
      </div>
      {error && <p className="text-red-500 min-h-[18px] text-sm">{error}</p>}
    </div>
  )
}
