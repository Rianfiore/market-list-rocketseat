import { UseClickInOutProps } from "@/hooks/useClickInOut/types";

export const useClickInOutMock: UseClickInOutProps = {
  ignoredRefs: [
    {
      current: document.createElement("span"),
    },
  ],
  onClickOutside: jest.fn(),
  onClickInside: jest.fn(),
};
