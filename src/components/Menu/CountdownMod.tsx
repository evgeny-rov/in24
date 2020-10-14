import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { StyledCountdownMod } from '../../styled/menu';
import { toggleCountdown } from '../../redux/actions';

interface Props {
  isCountdownDisabled: boolean;
  toggleCountdown: () => Action;
}

const CountdownMod: FunctionComponent<Props> = ({ isCountdownDisabled, toggleCountdown }) => {
  return <StyledCountdownMod disabled={isCountdownDisabled} onClick={toggleCountdown}/>;
};

const mapStateToProps = ({isCountdownDisabled}: AppState) => ({ isCountdownDisabled });

export default connect(mapStateToProps, { toggleCountdown })(CountdownMod);