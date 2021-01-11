import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { recycle } from '../../redux/actions';
import { ReactComponent as RecycleSVG } from '../../assets/recycle.svg';
import useTypedTranslation from '../../hooks/useTypedTranslation';

interface Props {
  recycle: () => Action;
}

const Recycle: FunctionComponent<Props> = ({ recycle }) => {
  const t = useTypedTranslation();

  return <RecycleSVG title={t('recycle_hover')} onClick={recycle} />;
};

export default connect(null, { recycle })(Recycle);
