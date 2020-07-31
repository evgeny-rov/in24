import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

interface TodoItemProps {
  readonly complete: boolean;
}

export const TodoListStyled = styled(motion.ul)`
  list-style: none;
  position: relative;
  box-sizing: border-box;
  width: 85%;
  height: 70%;
  padding-inline-start: 0;
  text-align: left;
  overflow-y: auto;
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

export const TodoItemWrapper = styled(motion.div)`
  display: flex;
  align-items: baseline;
`;

export const CheckBox = styled.input`
  margin-right: 1rem;
`;

export const TodoItemStyled = styled.li<TodoItemProps>`
  position: relative;
  cursor: pointer;
  word-wrap: break-word;
  transition: all 0.4s;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  color: ${(props) => (props.complete ? 'grey' : 'white')};

  &::first-letter {
    text-transform: uppercase;
  }

  & span {
    transition: all 0.4s;
  }

  & span:hover {
    padding-left: 0.5rem;
  }
`;
