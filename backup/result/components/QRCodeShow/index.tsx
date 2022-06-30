import { Card } from '@arco-design/web-react';
import style from './index.styl';

type Props = {
  /**
   * @path 二维码图片路径，存储在assets下
   */
  QRCode: any;
};
const QRCodeShow = (props: Props) => {
  const { QRCode } = props;
  return (
    <div className={style.module}>
      <div className={style.titleContainer}>
        <span className={style.title}>联系老师</span>
      </div>
      <Card>
        <div>
          <span className={style.subTitle}>
            请务必添加求职导师微信，提交简历，预约面试
          </span>
        </div>
        <div className={style.QRContainer}>
          <img src={QRCode} className={style.QRCodeImg} />
        </div>
      </Card>
    </div>
  );
};
export default QRCodeShow;
