import { ButtonStyled } from 'components/Button/Button.styled';

export function Button({ onClick }) {
  return (
    <ButtonStyled onClick={onClick} type="button">
      Load more
    </ButtonStyled>
  );
}
