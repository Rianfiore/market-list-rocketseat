import { UseClickOutsideProps } from "@/hooks/useClickOutside/types";

export const useClickOutsideMock: UseClickOutsideProps = {
  initialRef: { current: document.createElement("div") },
  aditionalRefs: [
    {
      current: document.createElement("div"),
    },
  ],
  onClickOutside: jest.fn(),
};
