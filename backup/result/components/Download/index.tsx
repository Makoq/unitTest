import React from 'react';
import { Card, Button } from '@arco-design/web-react';
import epLogo from './assets/logo.png';
import download from './assets/download.png';

import style from './index.styl';
import { downloadReporter } from '@/common/log/teaLog/sale/downloadReporter';
// import { hideEvaluationAndDownloadBtn } from '@/containers/sale/common/utils/hideEvaluationAndDownloadBtn';

const Download = () => {
  const handleDownloadClick = () => {
    downloadReporter.downloadBtnClick();
    window.location.href = 'https://ep.zlink.toutiao.com/daso';
  };

  return (
    <div className={style.module}>
      <div className={style.titleContainer}>
        <span className={style.title}>上课方式</span>
      </div>
      <Card>
        <div>
          <span className={style.subTitle}>获取学浪APP</span>
          <span className={style.recommend}>推荐</span>
        </div>
        <div className={style.thirdTitleContainer}>
          <span className={style.thirdTitle}>
            推荐使用
            <img className={style.epLogo} src={epLogo} />
            学浪APP上课，实时与老师同学互动学习
          </span>
        </div>
        <div className={style.downloadImgContainer}>
          <img src={download} className={style.downloadImg} />
        </div>
        <Button
          className={style.downloadBtn}
          type="outline"
          onClick={handleDownloadClick}>
          下载学浪APP开启课程
        </Button>
      </Card>
    </div>
  );
};

export default Download;
