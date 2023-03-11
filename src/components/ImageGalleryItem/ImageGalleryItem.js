import {
  ImageGalleryItemStyled,
  ImageStyled,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, onClick, id }) => {
  const getId = event => {
    onClick(event.currentTarget.id);
  };
  return (
    <ImageGalleryItemStyled onClick={getId} id={id}>
      <ImageStyled src={webformatURL} alt="" />
    </ImageGalleryItemStyled>
  );
};
