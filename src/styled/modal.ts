import styled from 'styled-components/macro';
import { Overlay } from './general';

export const ModalOverlay = styled(Overlay)`
  background: rgba(0, 0, 0, 0.938);
  flex-direction: column;
  z-index: 1000;
  color: #fff;
`;

export const ModalText = styled.span`
  font-size: 1.3rem;
  margin: 1rem;
`;

export const ModalBtn = styled.input`
  height: 2.5rem;
  width: 6rem;
  margin: 0.5rem;
  border: none;
  background: rgb(107, 74, 74);
  color: #fff;
  border-radius: 3px;
  transition: all 0.5s;

  &:hover {
    background: rgb(231, 71, 106);
  }
`;
