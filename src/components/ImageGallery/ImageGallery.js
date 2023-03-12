import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryStyled } from 'components/ImageGallery/ImageGallery.styled';
import { Relative } from 'components/Loader/Loader.styled';

export class ImageGallery extends Component {
  render() {
    return (
      <>
        <ImageGalleryStyled>
          {this.props.images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              onClick={() => this.props.onImageClick(largeImageURL)}
            />
          ))}
        </ImageGalleryStyled>
        {this.props.isLoading && (
          <Relative>
            <Loader />
          </Relative>
        )}
        {this.props.totalHits > this.props.images.length && (
          <Button
            onClick={this.props.onLoadMoreClick}
            disabled={this.props.isLoading}
          />
        )}
      </>
    );
  }
}
