import React from 'react';
import ImageListView from './components/ImageList/ImageListView';
import "./index.css";

const ImageGalleryView = ({ inpRef, handleSubmit, fetchData }) => {
   return (
   <div className='imagegallery'>
      <form style={{ marginBottom: 30 }} onSubmit={handleSubmit}>
         <input type="text" placeholder='Search for an image' ref={inpRef} />
      </form>
      <ImageListView images={fetchData} />
   </div>
   )
} 

export default ImageGalleryView;
