import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  bottom: 0;
  opacity: 0.9;
  z-index: 2;
`;

export const MenuItem = styled.div`
  width: 100%;
`;

export const StyledToolbar = styled(MenuItem)`
  box-sizing: border-box;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.3rem;
`;

export const StyledToolTip = styled.div`
  display: none;
  position: absolute;
  background: rgb(20, 20, 20);
  color: #fff;
  bottom: 100%;
  right: 2.5rem;
  padding: 0.8rem;
  border-radius: 8px 8px 0;
  text-align: center;
  font-size: 0.9rem;

  & span {
    display: block;
  }
`;

export const StyledInfoWrapper = styled.div`
  &:hover ${StyledToolTip} {
    display: block;
  }
`;

export const StyledFormInput = styled.input`
  box-sizing: border-box;
  padding: 0.5rem;
  border: none;
  height: 100%;
`;

export const StyledInputField = styled(StyledFormInput)`
  width: 80%;
  z-index: 4;
`;

export const StyledInputBtn = styled(StyledFormInput)`
  width: 20%;
  background: rgb(231, 71, 106);
  color: #fff;
  z-index: 5;
  box-shadow: 0 0 4px rgb(231, 71, 106);
  transition: all 0.6s;

  &:disabled {
    background: rgb(107, 74, 74);
    color: #aaa;
    box-shadow: inset 1px 0 3px rgb(36, 36, 36);
  }
`;
