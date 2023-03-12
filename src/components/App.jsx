import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Modal } from "./Modal/Modal";
import { getImages } from 'servises/GalleryApi';



export class App extends Component {
  state = {
    page: 1,
    query: '',
    isOpenModal: false,
    modalImage: '',
    images: [],
    totalHits: 0,
  }
  
  getImages = async () => {
    const { query, page, images} = this.state;
    this.setState({
      isLoading: true
    });
    const imagesArray = await getImages(query, page);
    this.setState({
      images: page > 1 ? [...images, ...imagesArray.hits] : imagesArray.hits,
      totalHits: imagesArray.totalHits,
      isLoading: false,
    })
  }

  onSearchBarSubmit =(query) => {
    this.setState({
      query,
      page: 1,
    }, ()=> {this.getImages()})
  }

  onLoadMoreClick = () => {
    const page = this.state.page + 1;
    this.setState({
      page
    }, ()=> {this.getImages()})
  }
  onToggleModal = () => {
    this.setState(prev => ({ isOpenModal: !prev.isOpenModal }));
  };
  onImageClick = img => {
    this.setState({ modalImage: img, isOpenModal: true });
  };


  render() {
    const {totalHits, images, isOpenModal, modalImage} = this.state
    return (
      <>
        <Searchbar onSubmit={this.onSearchBarSubmit} />
        <ImageGallery
          totalHits={totalHits}
          images={images}
          onLoadMoreClick={this.onLoadMoreClick}
          onImageClick={this.onImageClick}
        />
        {isOpenModal && (
          <Modal onToggleModal={this.onToggleModal}>
            <img src={modalImage} alt='' />
          </Modal>
        )}
      </>
    );
  };
}
