import { tagModels } from "./models";
import { TagProps } from "./types";

export function Tag({ type }: TagProps) {
  return (
    <span
      className="w-fit h-8 px-4 py-2 flex items-center justify-center gap-[6px] rounded-full"
      style={{ backgroundColor: tagModels[type].bgColor }}
      data-testid="tag"
    >
      {tagModels[type].icon}
      <p
        className="text-tag select-none"
        style={{ color: tagModels[type].contentColor }}
      >
        {tagModels[type].text}
      </p>
    </span>
  );
}
