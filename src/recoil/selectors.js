import { selector } from "recoil";
import { tokenState } from "./atoms";

export const themeColorState = selector({
  key: 'themeColorState',
  get: ({ get }) => {
    const token = get(tokenState);

    switch (token) {
      case 'dot':
        return '#E6007A';
      case 'ksm':
        return '#000000';
      case 'osn':
        return '#04D2C5';
      default:
        return '#04D2C5';
    }
  }
});
