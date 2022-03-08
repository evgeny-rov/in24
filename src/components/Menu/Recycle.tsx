import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { removeComplete } from '../../redux/actions';
import { ReactComponent as RecycleSVG } from '../../assets/recycle.svg';
import useTypedTranslation from '../../hooks/useTypedTranslation';

interface Props {
  removeComplete: () => Action;
}

const Recycle: FunctionComponent<Props> = ({ removeComplete }) => {
  const t = useTypedTranslation();

  return <RecycleSVG title={t('recycle_hover')} onClick={removeComplete} />;
};

export default connect(null, { removeComplete })(Recycle);
