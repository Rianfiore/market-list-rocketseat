import { useState } from "react";
import { InputTextProps } from "./types";

export function InputText({ label, ...props }: InputTextProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          data-isfocused={isFocused}
          className="text-neutral-gray200 data-[isfocused=true]:text-brand-purple-light"
        >
          {label}
        </label>
      )}
      <input
        data-testid="input-text"
        data-isfocused={isFocused}
        {...props}
        type="text"
        className="bg-neutral-gray500 border border-neutral-grey300 rounded-md h-10 w-full p-3 focus:outline-none data-[isfocused=true]:outline-brand-purple-light placeholder:text-neutral-gray200"
        onFocus={(e) => {
          setIsFocused(true);

          if (props.onFocus) {
            props.onFocus(e);
          }
        }}
        onBlur={(e) => {
          setIsFocused(false);

          if (props.onBlur) {
            props.onBlur(e);
          }
        }}
      />
    </div>
  );
}
