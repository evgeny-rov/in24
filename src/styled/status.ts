import styled from 'styled-components';

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

export const StyledCount = styled.span<{ active?: boolean }>`
  text-decoration: ${({ active }) => active ? 'none' : 'line-through'};
  color: ${({ active }) => active ? 'inherit' : '#555'};
`;

export const ProgressBarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 0.3rem;
  background: rgba(255, 255, 255, 0.1);
`;

export const StyledProgressBar = styled.div<{ size: string }>`
  height: 100%;
  width: ${({ size }) => `${size}%`};
  background: rgb(231, 71, 106);
  transition: all 0.7s;
`;

export const StyledProgressText = styled.span<{ complete?: boolean }>`
  color: ${(props) => (props.complete ? 'rgb(231, 71, 106)' : 'white')};
`;
