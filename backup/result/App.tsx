import React, { useEffect } from 'react';
import qs from 'query-string';
import style from './index.styl';
import Content from './components/Header';
import Download from './components/Download';
import QRCodeShow from './components/QRCodeShow';
import courseConfig from './course.config';
import BaseComponent from '@/components/BaseComponent';

const App = () => {
  useEffect(() => {
    const url = qs.parse(window.location.href.split('?')[1]);
    console.log(url.id);
  });

  const showQRCode = () => {
    const { id } = qs.parse(window.location.href.split('?')[1]);
    if (id !== undefined) {
      for (const item of courseConfig.courses) {
        if (item.uid === id) {
          return <QRCodeShow QRCode={item.QRCode} />;
        }
      }
    }

    return <></>;
  };
  return (
    <BaseComponent>
      <div>
        <Content />
      </div>
      <div className={style.container}>
        <Download />
        {showQRCode()}
      </div>
    </BaseComponent>
  );
};

export default App;
