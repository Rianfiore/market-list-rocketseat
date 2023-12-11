import theme from "@/styles/theme";
import { Apple, Beef, Carrot, Milk, Sandwich } from "lucide-react";
import { tagTypeEnum } from "./tag.enum";
import { TagModelType } from "./types";

export const tagModels: TagModelType = {
  bakery: {
    icon: <Sandwich color={theme.colors.support.yellow} size={16} />,
    text: tagTypeEnum.BAKERY,
    contentColor: theme.colors.support.yellow,
    bgColor: theme.colors.support["yellow-dark"],
  },
  vegetable: {
    icon: <Carrot color={theme.colors.support.green} size={16} />,
    text: tagTypeEnum.VEGETABLE,
    contentColor: theme.colors.support.green,
    bgColor: theme.colors.support["green-dark"],
  },
  fruit: {
    icon: <Apple color={theme.colors.support.orange} size={16} />,
    text: tagTypeEnum.FRUIT,
    contentColor: theme.colors.support.orange,
    bgColor: theme.colors.support["orange-dark"],
  },
  drink: {
    icon: <Milk color={theme.colors.support.blue} size={16} />,
    text: tagTypeEnum.DRINK,
    contentColor: theme.colors.support.blue,
    bgColor: theme.colors.support["blue-dark"],
  },
  meat: {
    icon: <Beef color={theme.colors.support.pink} size={16} />,
    text: tagTypeEnum.MEAT,
    contentColor: theme.colors.support.pink,
    bgColor: theme.colors.support["pink-dark"],
  },
};
