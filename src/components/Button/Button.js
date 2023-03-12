import { ButtonStyled } from 'components/Button/Button.styled';

export function Button(props) {
  return (
    <ButtonStyled {...props} type="button">
      Load more
    </ButtonStyled>
  );
}
