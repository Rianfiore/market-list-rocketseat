import theme from "@/styles/theme";
import { Check } from "lucide-react";
import React from "react";
import { DropdownMenuProps } from "./types";

export function DropdownMenu({
  dropdownMenuRef,
  inputWidth,
  data,
  selectedValue,
  onOptionChange = () => {},
  ...props
}: DropdownMenuProps) {
  return (
    <div
      {...props}
      data-testid="dropdown-menu"
      ref={dropdownMenuRef}
      data-width={inputWidth}
      style={{
        width: `${inputWidth}px`,
      }}
      className={`mt-1 absolute bg-neutral-gray500 border border-neutral-gray300 rounded-md focus:outline-none data-[isopenedmenu=true]:border-brand-purple-light data-[hasdefaultvalue=true]:text-neutral-gray200 appearance-none flex flex-col hover:cursor-pointer z-10 ${props.className}`}
    >
      {data.map((item, index) => {
        const lastItem = index === data.length - 1;
        const isSelected = item.value === selectedValue.value;

        return (
          <React.Fragment key={index}>
            <span
              data-testid="dropdown-menu-option"
              data-isselected={isSelected}
              className="p-[12px] hover:bg-neutral-gray400 flex justify-between w-full gap-2 data-[isselected=true]:bg-neutral-gray300"
              onClick={() => {
                onOptionChange(item);
              }}
            >
              <span className="flex gap-2 items-center">
                {item.icon}
                {item.value}
              </span>
              {isSelected && (
                <Check
                  className="self-end"
                  size={12}
                  color={theme.colors.brand["purple-light"]}
                />
              )}
            </span>
            {!lastItem && <hr className="border-neutral-gray300 border" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
