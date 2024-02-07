import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 15px 15px;
  font: inherit;
  cursor: pointer;
  border: 3px solid #2014c9;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  outline: none;

  &:hover {
    color: #2014c9;
    border: 3px solid #2014c9;
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border: 3px solid #2014c9;
  color: #2014c9;
  font-weight: 600;
  font-size: 20px;
  border-radius: 4px 8px;

  &:hover {
    color: #2014c9;
    border: 3px solid #15ebeb;
  }
`;
