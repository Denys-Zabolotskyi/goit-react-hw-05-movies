import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  border: 1px solid #d1d5db;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }
`;

export const Input = styled.input`
  flex: 1;
  margin-right: 10px;
  border-color: transparent;
  font-size: inherit;
  padding-left: 3px;
`;

export const Button = styled.button`
  align-items: center;
  display: flex;
  padding: 4px;
  border: 0;
  font-size: inherit;
  background-color: inherit;
  transition: color 0.2s linear;
  :hover {
    color: red;
  }
  span {
    margin-right: 4px;
  }
  cursor: pointer;
`;
