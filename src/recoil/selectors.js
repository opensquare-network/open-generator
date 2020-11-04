import { selector } from "recoil";
import { isVerticalState, tokenState } from "./atoms";
import {
  dotHorizontalCovers,
  dotVerticalCovers,
  ksmHorizontalCovers,
  ksmVerticalCovers,
  osnHorizontalCovers,
  osnVerticalCovers, phaHorizontalCovers
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
      case 'pha':
        return '#D2FD60';
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
      case 'pha':
        return 'rgba(197,197, 197, 0.12)';
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
        return isVertical ? dotHorizontalCovers : dotVerticalCovers;
      case 'ksm':
        return isVertical ? ksmHorizontalCovers : ksmVerticalCovers;
      case 'pha':
        return isVertical ? phaHorizontalCovers : dotVerticalCovers;
      case 'osn':
        return isVertical ? osnHorizontalCovers : osnVerticalCovers;
      default:
        return isVertical ? osnHorizontalCovers : osnVerticalCovers;
    }
  }
});
