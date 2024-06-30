import { cursorVariantContext } from "@/context/CursorVariantProvider";
import { Inputs } from "@/types/types";
import { useContext } from "react";
import { UseFormRegister } from "react-hook-form";

interface IGeneralInput {
  type: string;
  placeholder?: string;
  value: keyof Inputs;
  register: UseFormRegister<Inputs>;
}

export default function GeneralInput({type, placeholder, value, register}: IGeneralInput) {
    const context = useContext(cursorVariantContext);
    if (!context) throw new Error('No context provided');

    return (
        <input onMouseEnter={() => context.setValue('link')} onMouseLeave={() => context.setValue('default')} className="h-10  bg-transparent border-b-2 border-accentColor outline-none text-white w-full" type={type} id={value}  {...register(value)} placeholder={placeholder} />
    )
}
