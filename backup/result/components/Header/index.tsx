import React, { useEffect } from 'react';
import checkOk from './assets/checkOk.png';
import style from './index.styl';
import { downloadReporter } from '@/common/log/teaLog/sale/downloadReporter';
import BackIcon from '@/components/BackIcon';

const Header = () => {
  useEffect(() => {
    downloadReporter.pageShow();
  }, []);

  return (
    <div className={style.module}>
      <div>
        <BackIcon />
      </div>
      <div className={style.checkOkContainer}>
        <img className={style.checkOk} src={checkOk} />
        <span>报名成功</span>
      </div>
    </div>
  );
};

export default Header;
