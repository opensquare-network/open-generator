import { atom } from "recoil";
import {
  cruHorizontalCovers, cruVerticalCovers,
  dotHorizontalCovers,
  dotVerticalCovers,
  ksmHorizontalCovers,
  ksmVerticalCovers,
  osnHorizontalCovers,
  osnVerticalCovers,
  pcxHorizontalCovers,
  pcxVerticalCovers,
  phaHorizontalCovers,
  phaVerticalCovers
} from "../constants";

export const defaultToken = 'dot';

const defaultIsVertical = true;

export function getDefaultBannerUrls(token, vertical) {
  switch (token) {
    case 'dot':
      return vertical ? dotHorizontalCovers : dotVerticalCovers;
    case 'ksm':
      return vertical ? ksmHorizontalCovers : ksmVerticalCovers;
    case 'pha':
      return vertical ? phaHorizontalCovers : phaVerticalCovers;
    case 'cru':
      return vertical ? cruHorizontalCovers : cruVerticalCovers;
    case 'osn':
      return vertical ? osnHorizontalCovers : osnVerticalCovers;
    case 'pcx':
      return vertical ? pcxHorizontalCovers : pcxVerticalCovers;
    default:
      return vertical ? osnHorizontalCovers : osnVerticalCovers;
  }
}

export const tokenState = atom({
  key: 'tokenState',
  default: defaultToken
});

export const isVerticalState = atom({
  key: 'isVerticalState',
  default: defaultIsVertical
});

export const bannerState = atom({
  key: 'bannerState',
  default: getDefaultBannerUrls(defaultToken, defaultIsVertical)[0]
});

export const titleState = atom({
  key: 'titleState',
  default: ''
});

export const contentState = atom({
  key: 'contentState',
  default: ''
});
