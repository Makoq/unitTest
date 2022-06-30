// core
import React, { FC } from 'react';
// redux
import { connect } from 'react-redux';

import BaseComponent from '@/common/components/BaseComponent';
import LoadingLayout from '@/common/components/LoadingLayout';
import style from './index.styl';

const mapStateToProps = () => {};
const mapDispatchToProps = {};
type IProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Guide: FC<IProps> = props => {
  const { children } = props;
  return <div>{children}</div>;
};
const App = connect(mapStateToProps, mapDispatchToProps)(Guide);
export default function () {
  return (
    <BaseComponent>
      <App />
    </BaseComponent>
  );
}
