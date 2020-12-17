import { selector } from "recoil";
import { isVerticalState, tokenState, contentState } from "./atoms";
import {
  atpHorizontalCovers,
  atpVerticalCovers,
  baseHorizontalCovers,
  bdtHorizontalCovers,
  bdtVerticalCovers,
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
  litentryHorizontalCovers,
  litentryVerticalCovers,
  mxcHorizontalCovers,
  mxcVerticalCovers,
  osnHorizontalCovers,
  osnVerticalCovers,
  pcxHorizontalCovers,
  pcxVerticalCovers,
  phaHorizontalCovers,
  phaVerticalCovers,
  ringHorizontalCovers,
  ringVerticalCovers
} from "./constants";

export const themeColorState = selector({
  key: 'themeColorState',
  get: ({ get }) => {
    const token = get(tokenState);

    switch (token) {
      case 'dot':
      case 'bdt':
        return '#E6007A';
      case 'dego':
      case 'ksm':
      case 'bnc':
        return '#000000';
      case 'pha':
        return '#D2FD60';
      case 'cru':
        return '#fa8c16';
      case 'osn':
      case 'mxc':
        return '#04D2C5';
      case 'pcx':
      case 'atp':
        return '#ecb417';
      case 'ring':
        return '#B015ED';
      case 'litentry':
        return '#1BC675';
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
      case 'bdt':
        return '#FCE0EF';
      case 'dego':
      case 'ksm':
      case 'bnc':
        return '#E0E0E0';
      case 'pha':
        return '#F8FEE5';
      case 'cru':
        return '#FDDDBB';
      case 'osn':
      case 'mxc':
        return '#D7F8F6';
      case 'pcx':
      case 'atp':
        return '#FFF2CC';
      case 'ring':
        return '#F8E8FF';
      case 'litentry':
        return '#CFFFE8';
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
      case 'bnc':
        return isVertical ? bncHorizontalCovers : bncVerticalCovers;
      case 'mxc':
        return isVertical ? mxcHorizontalCovers : mxcVerticalCovers;
      case 'litentry':
        return isVertical ? litentryHorizontalCovers : litentryVerticalCovers;
      case 'bdt':
        return isVertical ? bdtHorizontalCovers : bdtVerticalCovers;
      default:
        return isVertical ? osnHorizontalCovers : osnVerticalCovers;
    }
  }
});

export const contentImageState = selector({
  key: 'contentImageState',
  get: ({ get }) => {
    const content = get(contentState);
    const editImages = [...content.matchAll(/(!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\))\(\s*(\d+)(?:px)?\s*\*\s*(\d+)(?:px)?\s*\)/g)];
    const images = editImages.map(item => ({src: item[2], width: item[4], height: item[5]}));
    const newContent = content.replace(/(!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\))\(\s*\d+(?:px)?\s*\*\s*\d+(?:px)?\s*\)/g, '$1');
    return { content: newContent, images }
  }
});
