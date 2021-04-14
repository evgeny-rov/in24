import styled from 'styled-components';
import { motion } from 'framer-motion';

interface TodoItemProps {
  readonly isComplete: boolean;
}

export const StyledTodoList = styled(motion.ul)`
  list-style: none;
  box-sizing: border-box;
  width: 85%;
  height: 70%;
  text-align: left;
  overflow-y: auto;
  overflow-x: hidden;
  line-height: 2rem;
  z-index: 2;
  padding-inline-start: 0;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.452);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: grey;
  }

  @media (max-height: 450px) {
    height: 50%;
  }
`;

export const StyledListItem = styled(motion.li)<TodoItemProps>`
  display: flex;
  align-items: baseline;
  border-radius: 5px;
  padding: 0.2rem 0.7rem;
  cursor: pointer;
  text-decoration: ${(props) => (props.isComplete ? 'line-through' : 'none')};
  color: ${(props) => (props.isComplete ? 'grey' : 'white')};

  &:hover,
  &:focus {
    background: rgba(150, 150, 150, 0.1);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }

  span {
    font-size: 1.05em;
    transition: all 0.4s;
    word-break: break-word;
  }

  span::first-letter {
    text-transform: uppercase;
  }
`;

export const CustomCheckbox = styled.label<TodoItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 0.9rem;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${(props) => (props.isComplete ? 'rgb(231, 71, 106)' : 'none')};
  border: ${(props) =>
    props.isComplete
      ? '1px solid rgb(231, 71, 106)'
      : '1px solid rgba(150, 150, 150, 0.3)'};
  box-shadow: ${(props) =>
    props.isComplete ? '0 0 4px rgb(231, 71, 106)' : 'none'};
  transition: all 0.2s;

  svg {
    visibility: ${props => props.isComplete ? 'visible' : 'hidden'};
    position: relative;
    pointer-events: none;
    fill: none;
    stroke-width: 3px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #fff;
    width: 100%;
    height: 100%;
  }
`;
