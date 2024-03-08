import { Input } from "@/components/atoms";
import { useClickInOut } from "@/hooks/useClickInOut";
import theme from "@/styles/theme";
import { Check } from "lucide-react";
import React, { useRef, useState } from "react";
import { DropdownSingleProps } from "./types";

export function DropdownSingle({
  data,
  label,
  placeholder,
  onOptionChange,
  ...props
}: DropdownSingleProps) {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [value, setValue] = useState<string>();
  const inputRef = useRef<HTMLSpanElement>(null);
  const inputWidth = inputRef.current?.offsetWidth;

  const { ref: dropdownMenuRef } = useClickInOut({
    ignoredRefs: [inputRef],
    onClickOutside: () => {
      setIsOpenedMenu(false);
    },
  });

  return (
    <div data-testid="dropdown-single">
      <Input.Select
        isOpenedMenu={isOpenedMenu}
        inputRef={inputRef}
        handleCloseMenu={(newState) => {
          setIsOpenedMenu(newState);
        }}
        {...props}
        value={value}
        placeholder={placeholder}
      />

      {isOpenedMenu && (
        <div
          data-testid="dropdown-single-menu"
          ref={dropdownMenuRef as React.RefObject<HTMLDivElement>}
          data-width={inputWidth}
          style={{
            width: `${inputWidth}px`,
          }}
          className="mt-1 absolute bg-neutral-gray500 border border-neutral-gray300 rounded-md focus:outline-none data-[isopenedmenu=true]:border-brand-purple-light data-[hasdefaultvalue=true]:text-neutral-gray200 appearance-none flex flex-col hover:cursor-pointer z-10"
        >
          {data.map((item, index) => {
            const lastItem = index === data.length - 1;
            const isSelected = item.value === value;

            return (
              <React.Fragment key={index}>
                <span
                  data-testid="dropdown-single-menu-option"
                  data-isselected={isSelected}
                  className="p-[12px] hover:bg-neutral-gray400 flex justify-between w-full data-[isselected=true]:bg-neutral-gray300"
                  onClick={() => {
                    setValue(item.value);
                    setIsOpenedMenu(false);

                    onOptionChange?.(item);
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
      )}
    </div>
  );
}
