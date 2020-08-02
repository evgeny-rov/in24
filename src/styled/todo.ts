import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

interface TodoItemProps {
  readonly complete: boolean;
}

export const StyledTodoList = styled(motion.ul)`
  position: relative;
  list-style: none;
  box-sizing: border-box;
  width: 85%;
  height: 70%;
  padding-inline-start: 0;
  text-align: left;
  overflow-y: auto;
  overflow-x: hidden;
  line-height: 2rem;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.452);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: grey;
  }
`;

export const StyledListItem = styled(motion.li)<TodoItemProps>`
  display: flex;
  align-items: baseline;
  border-radius: 5px;
  padding: 0 0.5rem;
  cursor: pointer;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  color: ${(props) => (props.complete ? 'grey' : 'white')};

  &:hover, &:focus {
    background: rgba(150, 150, 150, 0.1);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }

  span {
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
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${(props) => (props.complete ? 'rgb(231, 71, 106)' : 'none')};
  border: ${(props) =>
    props.complete
      ? '1px solid rgb(231, 71, 106)'
      : '1px solid rgba(150, 150, 150, 0.3)'};
  box-shadow: ${(props) =>
    props.complete ? '0 0 4px rgb(231, 71, 106)' : 'none'};
  transition: all 0.2s;

  input {
    display: none;
    appearance: none;
  }

  input:checked ~ svg {
    visibility: visible;
  }

  svg {
    visibility: hidden;
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
