// export const postCouponReceivedState: Epic<RootAction, RootAction, RootState, Dependencies> = (
//     action$,
//     state$,
//     { request },
// ) =>
//     action$.pipe(
//         filter(isActionOf(actions.postCouponReceivedState)),
//         map(action => action.payload),
//         switchMap(params => {
//             return from(actLogin.login(params.mobile, params.code)).pipe(
//                 switchMap(resp => {
//                     if (resp.status_code === 200) {
//                         const uid = resp.data.user_id
//                         return from(
//                             request.ep.douyin.postCouponReceivedState(
//                                 {
//                                     user_id: uid,
//                                     template_id: payload.template_id,
//                                     mobile: payload.mobile,
//                                     code: payload.code,
//                                     // 移动端web aid
//                                     aid: APP_ID_STUDENT_WEB,
//                                     app_id: APP_ID_STUDENT_WEB,
//                                     app_name: 'ep_web',
//                                 },
//                                 {
//                                     template_id: payload.template_id,
//                                     // 移动端web aid
//                                     aid: APP_ID_STUDENT_WEB,
//                                     app_id: APP_ID_STUDENT_WEB,
//                                     app_name: 'ep_web',
//                                 },
//                             ),
//                         ).pipe(
//                             switchMap(res => {
//                                 if (res.status_code !== 0 && res.status_code !== 20015) {
//                                     return of(actions.setToast({ status_code: res.status_code, prompt: res.prompt }))
//                                 }
//                                 const couponInfo = res.data?.coupon
//                                 const couponDtls = couponInfo && pickCouponInfo(couponInfo)

//                                 // return of(actions.setCouponDetail(couponDtls)) // 服务端数据挂掉使用，上线时删除（未做数据检测）
//                                 if (couponDtls) {
//                                     if (res.status_code === 20015) {
//                                         couponDtls.nthRequest = 3
//                                     } else {
//                                         couponDtls.nthRequest = 2
//                                     }
//                                     // TeaLog h5领取结果
//                                     const status = couponDtls.user_coupon?.status
//                                     let params
//                                     switch (true) {
//                                         case couponDtls.nthRequest === 2 && status === UserCouponStatus.WaitUse:
//                                             params = ResultState.success
//                                             break
//                                         case couponDtls.nthRequest === 3 && status === UserCouponStatus.WaitUse:
//                                             params = ResultState.received
//                                             break
//                                         case couponDtls.nthRequest === 3 && status === UserCouponStatus.Use:
//                                             params = ResultState.used
//                                             break
//                                         default:
//                                             params = ResultState.error
//                                             break
//                                     }
//                                     h5ReceiveResult({ result: params })
//                                     couponDtls.receiveState = params
//                                     return of(actions.setCouponReceivedState(couponDtls))
//                                 }
//                                 return EMPTY


//                             }),
//                         )
//                     }else{


//                     }

//                 }),
//             )
//         }),
//     )