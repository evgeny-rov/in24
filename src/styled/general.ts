import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Ubuntu Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  svg:not(#checkmark) {
    fill: rgb(143, 143, 143);
    transition: all 1s;
    padding: 0.7rem;

    & path {
      fill: rgb(143, 143, 143);
      transition: all 1s;
      padding: 0.7rem;
    }

    &:hover {
      transform: rotate(-180deg);
    }

    &:hover path {
      fill: rgb(231, 71, 106);
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppWrapper = styled(Overlay)`
  background: linear-gradient(-45deg, rgb(31, 31, 31) 0%, rgb(48, 48, 48) 100%);
  color: white;
  z-index: 1;
`;

export const TodoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 30rem;
  height: 40rem;
  background: rgb(45, 45, 45);
  border-radius: 0.5em;
  box-shadow: 0 0 20px 5px rgb(35, 35, 35);
  overflow: hidden;

  @media (max-width: 35rem) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
`;

export const BGLogo = styled.span`
  position: absolute;
  font-family: 'Bebas Neue', cursive;
  font-size: 20rem;
  bottom: -8rem;
  color: #000;
  opacity: 0.04;
  z-index: 1;
  user-select: none;
`;
