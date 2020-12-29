import React from 'react';
import { ReactComponent as InfoSVG } from '../../assets/info.svg';
import useTypedT from '../../hooks/useTypedT';
import { StyledToolTip, StyledInfoWrapper } from '../../styled/menu';

export default () => {
  const t = useTypedT();

  return (
    <StyledInfoWrapper>
      <StyledToolTip>
        <span>{t('info_1')}</span>
        <span>{t('info_2')}</span>
        <hr />
        <span>{t('info_3')}</span>
        <span>{t('info_4')}</span>
        <hr />
        <span>{t('info_5')}</span>
        <span>{t('info_6')}</span>
      </StyledToolTip>
      <InfoSVG title={t('info_hover')}/>
    </StyledInfoWrapper>
  );
};
