import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { getImages } from 'servises/GalleryApi';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryStyled } from 'components/ImageGallery/ImageGallery.styled';
import { Relative } from 'components/Loader/Loader.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
  };

  handlePage = () => {
    this.setState(prev => {
      return {
        page: prev.page + 1,
      };
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.serch !== this.props.serch) {
      this.setState({ loading: true });
      const imagesArray = await getImages(this.props.serch, this.state.page);
      this.setState({ images: imagesArray, loading: false });
    }
    if (prevState.page !== this.state.page) {
      const imagesArray = await getImages(this.props.serch, this.state.page);
      this.setState(prev => ({
        images: [...prev.images, ...imagesArray],
        loading: false,
      }));
    }
  }
  onClickImage = id => {
    this.props.setModalImage(
      this.state.images.find(img => Number(img.id) === Number(id)).largeImageURL
    );
  };

  render() {
    return (
      <>
        <ImageGalleryStyled>
          {this.state.images.map(({ id, webformatURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              onClick={this.onClickImage}
            />
          ))}
        </ImageGalleryStyled>
        {this.state.loading && (
          <Relative>
            <Loader />
          </Relative>
        )}
        <Button onClick={this.handlePage} />
      </>
    );
  }
}
