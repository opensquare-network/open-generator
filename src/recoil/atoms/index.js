import { atom } from "recoil";
import {
  atpHorizontalCovers,
  atpVerticalCovers,
  baseHorizontalCovers,
  bncHorizontalCovers,
  bncVerticalCovers,
  cruHorizontalCovers,
  cruVerticalCovers,
  degoHorizontalCovers,
  degoVerticalCovers,
  dotHorizontalCovers,
  dotVerticalCovers,
  ksmHorizontalCovers,
  ksmVerticalCovers,
  osnHorizontalCovers,
  osnVerticalCovers,
  pcxHorizontalCovers,
  pcxVerticalCovers,
  phaHorizontalCovers,
  phaVerticalCovers,
  ringHorizontalCovers,
  ringVerticalCovers
} from "../constants";

export const defaultToken = window.localStorage.getItem('token') || 'dot';

const storedVertical = window.localStorage.getItem('og-is-vertical');
const defaultIsVertical = typeof storedVertical === 'undefined' ? true : !!JSON.parse(storedVertical);

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
    case 'ring':
      return vertical ? ringHorizontalCovers : ringVerticalCovers;
    case 'base':
      return vertical ? baseHorizontalCovers : dotVerticalCovers;
    case 'dego':
      return vertical ? degoHorizontalCovers : degoVerticalCovers;
    case 'atp':
      return vertical ? atpHorizontalCovers : atpVerticalCovers;
    case 'bnc':
      return vertical ? bncHorizontalCovers : bncVerticalCovers;
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

export const isSignatureState = atom({
  key: 'isSignatureState',
  default: false
});

export const signatureState = atom({
  key: 'signatureState',
  default: ''
});

export const nonOfficialState = atom({
  key: 'nonOfficialState',
  default: false
});
