import { Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { filter, switchMap } from 'rxjs/operators';
import { catchErrorByEmpty } from '@/common/utils/catchErrorByEmpty';
import { from, EMPTY, of } from 'rxjs';
import { Dependencies, RootState } from '@/redux/configureStore';
import { incentiveApiServiceClient } from '@/api-lib/ep/api/incentive';

import { pickMedalList } from '@/common/helper/punchCard/pickMedalList';
import { RootAction } from '..';
import * as actions from './action';

/**
 * 获取用户目前获取的勋章
 */
export const getMedalListV2: Epic<
  RootAction,
  RootAction,
  RootState,
  Dependencies
> = (action$, _state$) =>
  action$.pipe(
    filter(isActionOf(actions.getUserMedalList)),
    switchMap(() => {
      return from(
        incentiveApiServiceClient.GetMedalList({
          api_version: '2.0',
        }),
      ).pipe(
        switchMap(res => {
          if (!res.status_code) {
            const data = pickMedalList(res.data);
            return of(actions.setUserMedalList(data));
          } else {
            return EMPTY;
          }
        }),
        catchErrorByEmpty,
      );
    }),
    catchErrorByEmpty,
  );
