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

const StudyTaskSystem: FC<IProps> = props => {
  return <div></div>;
};
const App = connect(mapStateToProps, mapDispatchToProps)(StudyTaskSystem);
export default function () {
  return (
    <BaseComponent>
      <App />
    </BaseComponent>
  );
}
