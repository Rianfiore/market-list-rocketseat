import { Input } from "@/components/atoms";
import { DropdownMenu } from "@/components/atoms/DropdownMenu";
import { useClickInOut } from "@/hooks/useClickInOut";
import { useRef, useState } from "react";
import { DropdownSingleProps } from "./types";

export function DropdownSingle({
  data,
  label,
  placeholder,
  onOptionChange,
  ...props
}: DropdownSingleProps) {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>();
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
        label={label}
        handleCloseMenu={(newState) => {
          setIsOpenedMenu(newState);
        }}
        {...props}
        value={selectedValue}
        placeholder={placeholder}
      />

      {isOpenedMenu && (
        <DropdownMenu
          dropdownMenuRef={dropdownMenuRef}
          inputWidth={inputWidth}
          data={data}
          selectedValue={{ value: selectedValue }}
          onOptionChange={(option) => {
            setSelectedValue(option.value!);
            setIsOpenedMenu(false);
            onOptionChange?.(option);
          }}
        />
      )}
    </div>
  );
}
