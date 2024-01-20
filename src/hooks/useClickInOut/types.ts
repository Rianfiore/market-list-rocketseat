export interface UseClickInOutProps {
  onClickInside?: () => void;
  onClickOutside?: () => void;
  ignoredRefs?: React.RefObject<HTMLElement>[];
  additionalRefs?: React.RefObject<HTMLElement>[];
}
