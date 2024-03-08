import theme from "@/styles/theme";
import { ChevronDown } from "lucide-react";
import { InputSelectProps } from "./types";

export function InputSelect({
  variant = "DEFAULT",
  isOpenedMenu,
  placeholder,
  value,
  label,
  handleCloseMenu = () => {},
  onClick,
  inputRef,
  children,
  width,
  ...props
}: InputSelectProps) {
  return (
    <div
      className="flex flex-col gap-2"
      data-testid="input-select"
      style={{ width: width }}
    >
      {label && (
        <label
          data-testid="input-select-label"
          data-isopenedmenu={isOpenedMenu}
          data-hasvalue={Boolean(value)}
          className="text-neutral-gray200 data-[isopenedmenu=true]:text-brand-purple-light data-[hasvalue=true]:text-brand-purple-light"
        >
          {label}
        </label>
      )}

      <span
        ref={inputRef}
        data-testid="input-select-input"
        data-variant={variant}
        data-isopenedmenu={isOpenedMenu}
        data-hasdefaultvalue={!value}
        data-hasplaceholder={Boolean(value) || Boolean(placeholder)}
        className="bg-neutral-gray400 border border-neutral-gray300 rounded-md h-[40px] w-full p-[12px] focus:outline-none data-[isopenedmenu=true]:border-brand-purple-light data-[hasdefaultvalue=true]:text-neutral-gray200 appearance-none flex justify-end data-[hasplaceholder=true]:justify-between hover:cursor-pointer data-[variant=LEFT-STRAIGHT]:rounded-s-none data-[variant=LEFT-STRAIGHT]:gap-3 data-[variant=LEFT-STRAIGHT]:text-neutral-gray200 data-[variant=LEFT-STRAIGHT]:text-xs data-[variant=LEFT-STRAIGHT]:items-center select-none"
        onClick={() => {
          handleCloseMenu(!isOpenedMenu);

          if (onClick) {
            onClick();
          }
        }}
        {...props}
      >
        {value ?? placeholder}
        <ChevronDown
          data-isopenedmenu={isOpenedMenu}
          color={
            isOpenedMenu
              ? theme.colors.brand["purple-light"]
              : theme.colors.neutral.gray200
          }
          size={16}
          className=" rotate-0 data-[isopenedmenu=true]:rotate-[-180deg] self-end"
        />
        <span className="absolute translate-x-[-0.9rem] translate-y-6">
          {children}
        </span>
      </span>
    </div>
  );
}
