import { Check } from "lucide-react";
import { CheckboxProps } from "./types";

export function Checkbox({ ...props }: CheckboxProps) {
  return (
    <div className="w-full flex gap-2">
      <input
        className="
        hover:cursor-pointer
        hover:bg-brand-purple-dark
        peer relative appearance-none shrink-0 w-[16px] h-[16px] border border-brand-purple-light rounded-sm bg-transparent
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-brand-purple-light
        checked:bg-info-success checked:border-none
        checked:hover:bg-info-success-light
        disabled:border-steel-400 disabled:bg-steel-400
      "
        type="checkbox"
        data-testid="checkbox"
        {...props}
      />
      <Check className="absolute w-[12px] h-[12px] ml-[2px] mt-[2px] pointer-events-none hidden peer-checked:block stroke-white outline-none" />
    </div>
  );
}
