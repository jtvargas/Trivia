import { scale } from 'react-native-size-matters';
import { GRID_BASE } from './Constants';

// Design Grid based in 4 line units
export const SPACER_UNITS = {
  /**  0 - 0  */ ZERO: 0,
  /**  1 - 4  */ ONE_4: GRID_BASE,
  /**  2 - 8  */ TWO_8: GRID_BASE * 2,
  /**  3 - 12  */ THREE_12: GRID_BASE * 3,
  /**  4 - 16 */ FOUR_16: GRID_BASE * 4,
  /**  5 - 20 */ FIVE_20: GRID_BASE * 5,
  /**  6 - 24 */ SIX_24: GRID_BASE * 6,
  /**  7 - 28 */ SEVEN_28: GRID_BASE * 7,
  /**  8 - 32 */ EIGHT_32: GRID_BASE * 8,
  /**  9 - 36 */ NINE_36: GRID_BASE * 9,
  /**  10 - 40 */ TEEN_40: GRID_BASE * 10,
  /**  11 - 44 */ ELEVEN_44: GRID_BASE * 11,
  /**  12 - 48 */ TWELVE_48: GRID_BASE * 12,
  /**  13 - 52 */ THIRTEEN_52: GRID_BASE * 13,
  /**  14 - 56 */ FOURTEEN_56: GRID_BASE * 14,
  /**  15 - 60 */ FIFTEEN_60: GRID_BASE * 15,
  /**  16 - 260 */ SIXTEEN_260: GRID_BASE * 60,
};

const spacers = Object.values(SPACER_UNITS).map((unit, index) => ({
  [`W_${index}`]: {
    width: scale(unit),
  },
  [`MW_${index}`]: {
    minWidth: scale(unit),
  },
  [`H_${index}`]: {
    height: scale(unit),
  },
  [`MH_${index}`]: {
    minHeight: scale(unit),
  },
  [`MA_${index}`]: {
    margin: scale(unit),
  },
  [`MB_${index}`]: {
    marginBottom: scale(unit),
  },
  [`MH_${index}`]: {
    marginHorizontal: scale(unit),
  },
  [`ML_${index}`]: {
    marginLeft: scale(unit),
  },
  [`MR_${index}`]: {
    marginRight: scale(unit),
  },
  [`MT_${index}`]: {
    marginTop: scale(unit),
  },
  [`MV_${index}`]: {
    marginVertical: scale(unit),
  },
  [`PA_${index}`]: {
    padding: scale(unit),
  },
  [`PB_${index}`]: {
    paddingBottom: scale(unit),
  },
  [`PH_${index}`]: {
    paddingHorizontal: scale(unit),
  },
  [`PL_${index}`]: {
    paddingLeft: scale(unit),
  },
  [`PR_${index}`]: {
    paddingRight: scale(unit),
  },
  [`PT_${index}`]: {
    paddingTop: scale(unit),
  },
  [`PV_${index}`]: {
    paddingVertical: scale(unit),
  },
}));

export default spacers.reduce((acc, current) => ({ ...acc, ...current }));
