import React, { useState } from 'react';
import { ReactComponent as InfoSVG } from '../../assets/info.svg';
import useTypedTranslation from '../../hooks/useTypedTranslation';
import { StyledToolTip } from '../../styled/menu';

export default () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const t = useTypedTranslation();

  return (
    <div
      title={t('info_hover')}
      onMouseOver={() => setShowTooltip(true)}
      onMouseOut={() => setShowTooltip(false)}
    >
      <StyledToolTip role="tooltip" hidden={!showTooltip}>
        <span>{t('info_1')}</span>
        <span>{t('info_2')}</span>
        <hr />
        <span>{t('info_3')}</span>
        <span>{t('info_4')}</span>
        <hr />
        <span>{t('info_5')}</span>
        <span>{t('info_6')}</span>
      </StyledToolTip>
      <InfoSVG />
    </div>
  );
};
