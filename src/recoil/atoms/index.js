import { atom } from "recoil";
import {
  dotHorizontalCovers,
  dotVerticalCovers,
  ksmHorizontalCovers,
  ksmVerticalCovers,
  osnHorizontalCovers, osnVerticalCovers
} from "../constants";

export const defaultToken = 'dot';

const defaultIsVertical = false;

export function getDefaultBannerUrls(token, vertical) {
  switch (token) {
    case 'dot':
      return vertical ? dotVerticalCovers : dotHorizontalCovers;
    case 'ksm':
      return vertical ? ksmVerticalCovers : ksmHorizontalCovers;
    case 'osn':
      return vertical ? osnVerticalCovers : osnHorizontalCovers;
    default:
      return vertical ? osnVerticalCovers : dotHorizontalCovers;
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
