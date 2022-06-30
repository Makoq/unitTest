/*
  - 只对strict模式有效
  - 更多介绍查看：https://bytedance.feishu.cn/docs/doccnylp0LFTUdC1KO44K2HCVQd#yDHcyn
 */
// 示例函数
// export function submitValidate(data) {
//   if (!data) {
//     return '没有提交数据';
//   }
// }
export function submitValidate(data) {
    if (!data) {
      return '没有提交数据';
    }
  
    //未通过原因放在data里
    // if (data.result == 'unpass') {
    //   data.unpassed_reason = data.unpassed_reason.map((item, index) => { return item[0] + item[1] + (data2['failedreason' + index] ? '(' + data2['failedreason' + index] + ')' : '') })
    //   data.unpassed_reason = data.unpassed_reason.join('、')
    // }
    if (data.result == 'unpass') {
      if (data.image_illegal === null && data.video_illegal === null && data.text_illegal === null && data.audio_illegal === null) {
        return '请选择不通过原因';
      }
    }
    console.log(data)
  }