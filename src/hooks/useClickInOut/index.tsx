import { useEffect, useRef, useState } from "react";
import { UseClickInOutProps } from "./types";

export const useClickInOut = ({
  onClickInside,
  onClickOutside,
  ignoredRefs = [],
  additionalRefs = [],
}: UseClickInOutProps = {}) => {
  const [isClickedInside, setIsClickedInside] = useState(false);
  const [isClickedOutside, setIsClickedOutside] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        setIsClickedInside(true);
        setIsClickedOutside(false);

        if (onClickInside) {
          onClickInside();
        }
      } else {
        for (const ignoredRef of ignoredRefs) {
          if (
            ignoredRef.current &&
            ignoredRef.current.contains(event.target as Node)
          ) {
            return;
          }
        }

        for (const additionalRef of additionalRefs) {
          if (
            additionalRef.current &&
            additionalRef.current.contains(event.target as Node)
          ) {
            setIsClickedInside(true);
            setIsClickedOutside(false);
            return;
          }
        }

        setIsClickedInside(false);
        setIsClickedOutside(true);

        if (onClickOutside) {
          onClickOutside();
        }
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClickInside, onClickOutside, ignoredRefs, additionalRefs]);

  return { isClickedInside, isClickedOutside, ref };
};
