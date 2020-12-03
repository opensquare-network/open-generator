import { selector } from "recoil";
import { isVerticalState, tokenState } from "./atoms";
import {
  baseHorizontalCovers,
  cruHorizontalCovers,
  cruVerticalCovers, degoHorizontalCovers, degoVerticalCovers,
  dotHorizontalCovers,
  dotVerticalCovers,
  ksmHorizontalCovers,
  ksmVerticalCovers,
  osnHorizontalCovers,
  osnVerticalCovers, pcxHorizontalCovers, pcxVerticalCovers,
  phaHorizontalCovers,
  phaVerticalCovers, ringHorizontalCovers, ringVerticalCovers,
  atpHorizontalCovers,
  atpVerticalCovers
} from "./constants";

export const themeColorState = selector({
  key: 'themeColorState',
  get: ({ get }) => {
    const token = get(tokenState);

    switch (token) {
      case 'dot':
        return '#E6007A';
      case 'dego':
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
      case 'ring':
        return '#B015ED';
      case 'atp':
        return '#ECB417';
      default:
        return '#E6007A';
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
      case 'dego':
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
      case 'ring':
        return '#F8E8FF';
      case 'atp':
        return '#FFE7A5';
      default:
        return '#FCE0EF';
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
      case 'ring':
        return isVertical ? ringHorizontalCovers : ringVerticalCovers;
      case 'base':
        return isVertical ? baseHorizontalCovers : dotVerticalCovers;
      case 'dego':
        return isVertical ? degoHorizontalCovers : degoVerticalCovers;
      case 'atp':
        return isVertical ? atpHorizontalCovers : atpVerticalCovers;
      default:
        return isVertical ? osnHorizontalCovers : osnVerticalCovers;
    }
  }
});
