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
      return vertical ? dotHorizontalCovers : dotVerticalCovers;
    case 'ksm':
      return vertical ? ksmHorizontalCovers : ksmVerticalCovers;
    case 'osn':
      return vertical ? osnHorizontalCovers : osnVerticalCovers;
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
