import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid black;
  padding: 15px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Input = styled.input`
   {
    width: 200px;
    margin-top: 15px;
    padding: 5px;
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 10px 3px rgba(44, 144, 232, 1);
  }
`;

export const Button = styled.button`
   {
    font-size: 16px;
    width: 100px;
    padding: 5px;
    cursor: pointer;
  }

  :hover {
    background-color: #abe6ba;
  }
`;
