import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../../redux/actions';
import useCountdown from '../../hooks/useCountdown';
import oneDayInMsToString from '../../utils/oneDayInMstoString';

interface Props {
  countAmount: number;
  isCountdownDisabled: boolean;
  resetApp: () => Action;
}

const Countdown: FunctionComponent<Props> = ({
  countAmount,
  isCountdownDisabled,
  resetApp,
}) => {
  const timeLeft = useCountdown(countAmount, resetApp);

  return <span>{!isCountdownDisabled && oneDayInMsToString(timeLeft)}</span>;
};

const mapStateToProps = ({ expires, isCountdownDisabled }: AppState) => ({
  countAmount: expires - Date.now(),
  isCountdownDisabled,
  key: expires,
});

export default connect(mapStateToProps, { resetApp })(Countdown);
