import { IconLeft } from '@arco-design/web-react/icon';
import style from './index.styl';

const BackIcon = () => {
  const onClick = () => {
    window.history.back();
  };
  return (
    <div className={style.header}>
      <IconLeft className={style.backIcon} onClick={onClick} />
    </div>
  );
};
export default BackIcon;
