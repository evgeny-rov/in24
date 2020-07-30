import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../../redux/actions';
import useCountdown from '../../hooks/useCountdown';
import oneDayInMsToString from '../../utils/oneDayInMstoString';

interface Props {
  countAmount: number;
  resetApp: () => Action;
}

const Countdown: FunctionComponent<Props> = ({ countAmount, resetApp }) => {
  const timeLeft = useCountdown(countAmount, resetApp);

  return <span>{oneDayInMsToString(timeLeft)}</span>;
};

const mapStateToProps = ({ expires }: AppState) => ({
  countAmount: expires - Date.now(),
  key: expires,
});

export default connect(mapStateToProps, { resetApp })(Countdown);
