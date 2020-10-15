import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { StyledCountdownMod } from '../../styled/menu';
import { toggleCountdown } from '../../redux/actions';
import { ReactComponent as ClockSVG } from '../../assets/clock.svg';

interface Props {
  isCountdownActive: boolean;
  toggleCountdown: () => Action;
}

const CountdownMod: FunctionComponent<Props> = ({
  isCountdownActive,
  toggleCountdown,
}) => {
  return (
    <StyledCountdownMod
      title="Toggle Countdown"
      active={isCountdownActive}
      onClick={toggleCountdown}
    >
      <ClockSVG />
    </StyledCountdownMod>
  );
};

const mapStateToProps = ({ isCountdownActive }: AppState) => ({
  isCountdownActive,
});

export default connect(mapStateToProps, { toggleCountdown })(CountdownMod);
