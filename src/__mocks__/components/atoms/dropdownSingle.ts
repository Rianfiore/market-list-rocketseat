import { tagModels } from "@/components/atoms/Tag/models";

export const dropdownSingleMock = {
  label: "Categoria",
  placeholder: "Selecione uma categoria",
  onClick: jest.fn(),
  onOptionChange: jest.fn(),
  data: Object.values(tagModels).map(({ icon, text }) => {
    const formatedText = text[0].toUpperCase() + text.slice(1);
    return {
      icon,
      value: formatedText,
    };
  }),
};
