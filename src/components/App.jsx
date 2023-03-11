import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";



export class App extends Component {
   state = {
     query: '',
     isOpenModal: false,
     modalImage: '',
 }

   onSubmit =(value) => {
    this.setState({
    query: value,
 })
   }
  onToggleModal = () => {
    this.setState(prev => ({ isOpenModal: !prev.isOpenModal }));
  };
   setModalImage = img => {
    this.setState({ modalImage: img, isOpenModal: true });
  };

 
  render() {
    return (
      
      <><Searchbar onSubmit={this.onSubmit} />
        <ImageGallery serch={this.state.query}  setModalImage={this.setModalImage} />
        {this.state.isOpenModal && (
          <Modal onToggleModal={this.onToggleModal}>
            <img src={this.state.modalImage} />
          </Modal>
        )}
      </>
    );
  };
}
