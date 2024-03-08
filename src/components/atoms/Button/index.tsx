import { Add } from "./models/Add";
import { More } from "./models/More";
import { ButtonProps } from "./types";

export function Button({ variant = "ADD", ...props }: ButtonProps) {
  if (variant === "MORE") {
    return <More {...props} />;
  }

  return <Add {...props} />;
}
