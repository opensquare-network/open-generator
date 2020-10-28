import { selector } from "recoil";
import { isVerticalState, tokenState } from "./atoms";
import {
  dotHorizontalCovers, dotVerticalCovers,
  ksmHorizontalCovers,
  ksmVerticalCovers,
  osnHorizontalCovers,
  osnVerticalCovers
} from "./constants";

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

export const secondaryThemeColorState = selector({
  key: 'secondaryThemeColorState',
  get: ({ get }) => {
    const token = get(tokenState);

    switch (token) {
      case 'dot':
        return '#FCE0EF';
      case 'ksm':
        return '#E0E0E0';
      case 'osn':
        return '#D7F8F6';
      default:
        return '#D7F8F6';
    }
  }
});

export const coversState = selector({
  key: 'coversState',
  get: ({ get }) => {
    const token = get(tokenState);
    const isVertical = get(isVerticalState);

    switch (token) {
      case 'dot':
        return isVertical ? dotVerticalCovers : dotHorizontalCovers;
      case 'ksm':
        return isVertical ? ksmVerticalCovers : ksmHorizontalCovers;
      case 'osn':
        return isVertical ? osnVerticalCovers : osnHorizontalCovers;
      default:
        return isVertical ? osnVerticalCovers : dotHorizontalCovers;
    }
  }
});
