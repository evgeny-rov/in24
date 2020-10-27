import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { resetApp, toggleCountdown } from '../../redux/actions';
import useCountdown from '../../hooks/useCountdown';
import oneDayInMsToString from '../../utils/oneDayInMstoString';
import { StyledCount } from '../../styled/status';

interface Props {
  countAmount: number;
  isCountdownActive: boolean;
  resetApp: () => Action;
  toggleCountdown: () => Action;
}

const Countdown: FunctionComponent<Props> = ({
  countAmount,
  isCountdownActive,
  resetApp,
  toggleCountdown,
}) => {
  const timeLeft = useCountdown(countAmount, resetApp, !isCountdownActive);

  return (
    <StyledCount active={isCountdownActive} role="button" onClick={toggleCountdown}>
      {isCountdownActive ? oneDayInMsToString(timeLeft) : '00:00:00'}
    </StyledCount>
  );
};

const mapStateToProps = ({ expires, isCountdownActive }: AppState) => ({
  countAmount: expires - Date.now(),
  isCountdownActive,
  key: expires,
});

export default connect(mapStateToProps, { resetApp, toggleCountdown })(Countdown);
