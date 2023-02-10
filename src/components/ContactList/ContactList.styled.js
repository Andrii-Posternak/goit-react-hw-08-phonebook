import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: numeric;
`;

export const ContactItem = styled.li`
  // font-size: 24px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  font-size: 16px;
  background-color: #eb4b5b;
  border-radius: 10px;
  width: 80px;
  padding: 5px;
  margin-left: 20px;
  cursor: pointer;
  border: none;

  :hover {
    background-color: #c73241;
  }
`;
