import { Medal } from '@/services/punch-card/type';
import { produce } from 'immer';
import { getType } from 'typesafe-actions';
import { MedalWallActions } from '..';
import * as actions from './action';

export type State = {
  sepcialMedalWallList: Medal[];
  normalMedalWallList: Medal[];
  totalCount: number;
};

const defaultState: State = {
  sepcialMedalWallList: [],
  normalMedalWallList: [],
  totalCount: 0,
};

export const reducer = produce((state: State, action: MedalWallActions) => {
  switch (action.type) {
    case getType(actions.setUserMedalList):
      state.sepcialMedalWallList = action.payload.specialMedalList;
      state.normalMedalWallList = action.payload.normalMedalList;
      state.totalCount = action.payload.totalCount;
      break;

    default:
      return state;
  }

  return state;
}, defaultState);

export default reducer;
