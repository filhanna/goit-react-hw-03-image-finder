import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const SearchbarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FieldStyled = styled(Field)`
  font-size: 16px;
  line-height: 1.75;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  margin-right: 16px;
  width: 100%;
`;

export const ButtonStyled = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  color: #fff;
  background-color: #4f5ba6;
  border: none;
  border-radius: 4px;
  padding: 6px 16px;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #3f47a3;
    cursor: pointer;
  }
`;
