import { createAction } from 'typesafe-actions';
import { PickedMedalInfo } from '@/services/punch-card/type';

/**
 * 勋章墙-获取用户获得的所有勋章
 */
export const getUserMedalList = createAction(
  `PUNCH_CARD_GET_USER_MEDAL_LIST`,
)();

export const setUserMedalList = createAction(`PUNCH_CARD_SET_USER_MEDAL_LIST`)<
  PickedMedalInfo
>();
