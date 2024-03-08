import { useClickInOut } from "@/hooks/useClickInOut";
import theme from "@/styles/theme";
import { Check, ChevronDown } from "lucide-react";
import React, { useRef, useState } from "react";
import { DropdownSingleProps } from "./types";

export function DropdownSingle({
  data,
  label,
  placeholder,
  onClick,
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
    <>
      <div className="flex flex-col gap-2" data-testid="dropdown-single">
        {label && (
          <label
            data-testid="dropdown-single-label"
            data-isopenedmenu={isOpenedMenu}
            data-hasvalue={Boolean(value)}
            className="text-neutral-gray200 data-[isopenedmenu=true]:text-brand-purple-light data-[hasvalue=true]:text-brand-purple-light"
          >
            {label}
          </label>
        )}

        <span
          ref={inputRef}
          data-testid="dropdown-single-input"
          data-isopenedmenu={isOpenedMenu}
          data-hasdefaultvalue={!value}
          data-hasplaceholder={Boolean(value) || Boolean(placeholder)}
          className="bg-neutral-gray500 border border-neutral-gray300 rounded-md h-[40px] w-full p-[12px] focus:outline-none data-[isopenedmenu=true]:border-brand-purple-light data-[hasdefaultvalue=true]:text-neutral-gray200 appearance-none flex justify-end data-[hasplaceholder=true]:justify-between hover:cursor-pointer"
          onClick={() => {
            setIsOpenedMenu(!isOpenedMenu);

            if (onClick) {
              onClick();
            }
          }}
          {...props}
        >
          {value ?? placeholder}
          <ChevronDown
            data-isopenedmenu={isOpenedMenu}
            color={theme.colors.neutral.gray200}
            size={16}
            className=" rotate-0 data-[isopenedmenu=true]:rotate-[-180deg] self-end"
          />
        </span>
      </div>

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
    </>
  );
}
