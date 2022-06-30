// core
import React, { FC, useEffect } from 'react';
// redux
import { connect } from 'react-redux';
import { CombinedStates } from '@/redux/configureStore';
import {
  getActivityInfo,
  setLoadingState,
} from '@/redux/modules/punch-card/action';
// component
import BaseComponent from '@/common/components/BaseComponent';
import LoadingLayout from '@/common/components/LoadingLayout';
import Guide from './components/Guide';
import StudyTaskSystem from './components/StudyTaskSystem';
// style
import style from './index.styl';

const mapStateToProps = ({ punchCard }: CombinedStates) => punchCard;
const mapDispatchToProps = {
  getActivityInfo,
  setLoadingState,
};
type IProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const SevenDaysPunchCard: FC<IProps> = props => {
  const { showPunchCardPage, loadingState, getActivityInfo } = props;

  const dataInit = () => {
    getActivityInfo();
  };

  useEffect(() => {
    dataInit();
  }, []);

  return (
    <LoadingLayout state={loadingState} handleRetry={dataInit}>
      <div className={style.container}>
        {showPunchCardPage ? <StudyTaskSystem /> : <Guide />}
      </div>
    </LoadingLayout>
  );
};

const App = connect(mapStateToProps, mapDispatchToProps)(SevenDaysPunchCard);

export default function () {
  return (
    <BaseComponent getStatusBarHeight={true}>
      <App />
    </BaseComponent>
  );
}
