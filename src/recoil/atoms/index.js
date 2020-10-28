import { atom } from "recoil";
export const defaultToken = 'dot';

export const tokenState = atom({
  key: 'tokenState',
  default: defaultToken
});
