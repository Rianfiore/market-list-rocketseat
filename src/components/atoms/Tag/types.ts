export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: "bakery" | "vegetable" | "fruit" | "drink" | "meat";
}

export type TagModelType = {
  [key in TagProps["type"]]: {
    icon: JSX.Element;
    text: string;
    contentColor: string;
    bgColor: string;
  };
};
