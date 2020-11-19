import { selector } from "recoil";
import { isVerticalState, tokenState } from "./atoms";
import {
  cruHorizontalCovers,
  cruVerticalCovers,
  dotHorizontalCovers,
  dotVerticalCovers,
  ksmHorizontalCovers,
  ksmVerticalCovers,
  osnHorizontalCovers,
  osnVerticalCovers, pcxHorizontalCovers, pcxVerticalCovers,
  phaHorizontalCovers,
  phaVerticalCovers
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
      case 'cru':
        return '#fa8c16';
      case 'osn':
        return '#04D2C5';
      case 'pcx':
        return '#ecb417';
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
        return '#F8FEE5';
      case 'cru':
        return '#FDDDBB';
      case 'osn':
        return '#D7F8F6';
      case 'pcx':
        return '#FFF2CC';
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
        return isVertical ? phaHorizontalCovers : phaVerticalCovers;
      case 'cru':
        return isVertical ? cruHorizontalCovers : cruVerticalCovers;
      case 'osn':
        return isVertical ? osnHorizontalCovers : osnVerticalCovers;
      case 'pcx':
        return isVertical ? pcxHorizontalCovers : pcxVerticalCovers;
      default:
        return isVertical ? osnHorizontalCovers : osnVerticalCovers;
    }
  }
});
