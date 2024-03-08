import { Input } from "@/components/atoms";
import { DropdownMenu } from "@/components/atoms/DropdownMenu";
import { useClickInOut } from "@/hooks/useClickInOut";
import { useRef, useState } from "react";
import { DropdownDoubleProps } from "./types";

export function DropdownDouble({
  label,
  data,
  onOptionChange,
}: DropdownDoubleProps) {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [selectValue, setSelectValue] = useState<string>(data[0].value!);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef<HTMLSpanElement>(null);
  const inputWidth = inputRef.current?.offsetWidth;
  const { ref: dropdownMenuRef } = useClickInOut({
    ignoredRefs: [inputRef],
    onClickOutside: () => {
      setIsOpenedMenu(false);
    },
  });

  return (
    <div
      data-testid="dropdown-double"
      className="flex flex-col gap-2"
      ref={dropdownRef}
    >
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
        <Input.Text
          variant="RIGHT-STRAIGHT"
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          maxLength={8}
          width={88}
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
            <DropdownMenu
              dropdownMenuRef={dropdownMenuRef}
              inputWidth={inputWidth}
              data={data}
              selectedValue={{ value: selectValue }}
              onOptionChange={(option) => {
                setSelectValue(option.value!);
                onOptionChange?.(option);
              }}
            />
          )}
        </Input.Select>
      </span>
    </div>
  );
}
