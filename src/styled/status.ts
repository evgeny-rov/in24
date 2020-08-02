import styled from 'styled-components/macro';

export const StatusContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  user-select: none;
  width: 100%;
  height: 2rem;
  top: 0;
  opacity: 0.9;
  z-index: 2;

  & span {
    font-size: 0.9rem;
    padding: 1.5rem;
    transition: all 0.5s;
  }
`;

export const StyledProgressBar = styled.progress`
  position: absolute;
  top: 0;
  border: none;
  width: 100%;
  height: 0.3rem;

  &::-webkit-progress-bar {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-progress-value {
    background: rgb(231, 71, 106);
    transition: all 0.7s;
    box-shadow: 0 0 7px 1px rgb(231, 71, 106);
  }
`;

export const StyledProgressText = styled.span<{ complete?: boolean }>`
  color: ${(props) => (props.complete ? 'rgb(231, 71, 106)' : 'white')};
`;
