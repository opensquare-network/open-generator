import { atom } from 'recoil'
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
  ringVerticalCovers,
  trueHorizontalCovers,
  trueVerticalCovers,
  mapHorizontalCovers,
  mapVerticalCovers,
  patHorizontalCovers,
  patVerticalCovers,
  sssnodesHorizontalCovers,
  sssnodesVerticalCovers
} from '../constants'

export const defaultToken = window.localStorage.getItem('token') || 'dot'

const storedVertical = window.localStorage.getItem('og-is-vertical')
const defaultIsVertical =
  typeof storedVertical === 'undefined' ? true : !!JSON.parse(storedVertical)

export function getDefaultBannerUrls(token, vertical) {
  switch (token) {
    case 'dot':
      return vertical ? dotHorizontalCovers : dotVerticalCovers
    case 'ksm':
      return vertical ? ksmHorizontalCovers : ksmVerticalCovers
    case 'pha':
      return vertical ? phaHorizontalCovers : phaVerticalCovers
    case 'cru':
      return vertical ? cruHorizontalCovers : cruVerticalCovers
    case 'osn':
      return vertical ? osnHorizontalCovers : osnVerticalCovers
    case 'pcx':
      return vertical ? pcxHorizontalCovers : pcxVerticalCovers
    case 'ring':
      return vertical ? ringHorizontalCovers : ringVerticalCovers
    case 'base':
      return vertical ? baseHorizontalCovers : dotVerticalCovers
    case 'dego':
      return vertical ? degoHorizontalCovers : degoVerticalCovers
    case 'atp':
      return vertical ? atpHorizontalCovers : atpVerticalCovers
    case 'bnc':
      return vertical ? bncHorizontalCovers : bncVerticalCovers
    case 'mxc':
      return vertical ? mxcHorizontalCovers : mxcVerticalCovers
    case 'litentry':
      return vertical ? litentryHorizontalCovers : litentryVerticalCovers
    case 'bdt':
      return vertical ? bdtHorizontalCovers : bdtVerticalCovers
    case 'true':
      return vertical ? trueHorizontalCovers : trueVerticalCovers
    case 'map':
      return vertical ? mapHorizontalCovers : mapVerticalCovers
    case 'patract':
      return vertical ? patHorizontalCovers : patVerticalCovers
    case 'sssnodes':
      return vertical ? sssnodesHorizontalCovers : sssnodesVerticalCovers
    default:
      return vertical ? osnHorizontalCovers : osnVerticalCovers
  }
}

export const tokenState = atom({
  key: 'tokenState',
  default: defaultToken,
})

export const isVerticalState = atom({
  key: 'isVerticalState',
  default: defaultIsVertical,
})

export const bannerState = atom({
  key: 'bannerState',
  default: getDefaultBannerUrls(defaultToken, defaultIsVertical)[0],
})

export const titleState = atom({
  key: 'titleState',
  default: '',
})

export const contentState = atom({
  key: 'contentState',
  default: '',
})

export const isSignatureState = atom({
  key: 'isSignatureState',
  default: false,
})

export const signatureState = atom({
  key: 'signatureState',
  default: '',
})

export const nonOfficialState = atom({
  key: 'nonOfficialState',
  default: false,
})
