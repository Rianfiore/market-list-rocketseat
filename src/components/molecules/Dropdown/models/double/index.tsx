import { Input } from "@/components/atoms";
import { useClickInOut } from "@/hooks/useClickInOut";
import theme from "@/styles/theme";
import { Check } from "lucide-react";
import React, { useRef, useState } from "react";
import { DropdownDoubleProps } from "./types";

export function DropdownDouble({
  label,
  data,
  onOptionChange,
}: DropdownDoubleProps) {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [selectValue, setSelectValue] = useState<string>(data[0]);
  const [isInputFocused, setIsInputFocused] = useState(false);

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
      <div data-testid="dropdown-double" className="flex flex-col gap-2">
        {label && (
          <label
            data-testid="dropdown-double-label"
            data-isopenedmenu={isOpenedMenu}
            data-isfocused={isInputFocused}
            data-hasvalue={Boolean(selectValue)}
            className="text-neutral-gray200 data-[isfocused=true]:text-brand-purple-light"
          >
            {label}
          </label>
        )}
        <span className="flex">
          <input
            type="text"
            data-testid="dropdown-double-input-text"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            maxLength={8}
            className="w-[88px] bg-neutral-gray500 rounded-s-md outline-none p-3 border-neutral-gray300 border-[1px] focus:border-brand-purple-light"
          />

          <Input.Select
            variant="LEFT-STRAIGHT"
            isOpenedMenu={isOpenedMenu}
            inputRef={inputRef}
            handleCloseMenu={(newState) => {
              setIsOpenedMenu(newState);
            }}
            width={72}
            value={selectValue.toUpperCase()}
          >
            {isOpenedMenu && (
              <div
                data-testid="dropdown-double-menu"
                ref={dropdownMenuRef as React.RefObject<HTMLDivElement>}
                data-width={inputWidth}
                style={{
                  width: `${inputWidth}px`,
                }}
                className="mt-9 translate-x-[-0.9rem] absolute self-start bg-neutral-gray400 border border-neutral-gray300 rounded-md focus:outline-none data-[isopenedmenu=true]:border-brand-purple-light data-[hasdefaultvalue=true]:text-neutral-gray200 appearance-none flex flex-col hover:cursor-pointer z-10"
              >
                {data.map((item, index) => {
                  const lastItem = index === data.length - 1;
                  const isSelected = item === selectValue;

                  return (
                    <React.Fragment key={index}>
                      <span
                        data-testid="dropdown-double-menu-option"
                        data-isselected={isSelected}
                        className="p-[12px] hover:bg-neutral-gray400 flex justify-between w-full data-[isselected=true]:bg-neutral-gray300"
                        onClick={() => {
                          setSelectValue(item);
                          setIsOpenedMenu(false);

                          onOptionChange?.(item);
                        }}
                      >
                        <span className="flex gap-2 items-center">{item}</span>
                        {isSelected && (
                          <Check
                            className="self-end"
                            size={12}
                            color={theme.colors.brand["purple-light"]}
                          />
                        )}
                      </span>
                      {!lastItem && (
                        <hr className="border-neutral-gray300 border" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </Input.Select>
        </span>
      </div>
    </>
  );
}
