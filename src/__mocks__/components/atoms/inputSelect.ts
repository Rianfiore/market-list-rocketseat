import { InputSelectProps } from "@/components/atoms/Input/models/select/types";

export const inputSelectMock: InputSelectProps = {
  isOpenedMenu: true,
  onClick: jest.fn(),
  handleCloseMenu: jest.fn(),
  placeholder: "Selecione uma categoria",
  label: "Categoria",
};
