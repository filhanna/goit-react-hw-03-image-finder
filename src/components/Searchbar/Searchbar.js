import { Component } from 'react';
import React from 'react';
import { Formik } from 'formik';
import {
  SearchbarStyled,
  FormStyled,
  FieldStyled,
  ButtonStyled,
} from 'components/Searchbar/Searchbar.styled';

export class Searchbar extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values.serch);
    resetForm();
  };
  render() {
    return (
      <SearchbarStyled>
        <Formik initialValues={{ serch: '' }} onSubmit={this.handleSubmit}>
          {({ handleSubmit }) => (
            <FormStyled onSubmit={handleSubmit}>
              <ButtonStyled type="submit">
                <span>Search</span>
              </ButtonStyled>
              <FieldStyled
                name="serch"
                type="text"
                placeholder="Search images and photos"
              />
            </FormStyled>
          )}
        </Formik>
      </SearchbarStyled>
    );
  }
}
