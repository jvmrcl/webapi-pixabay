import React, { useRef, useState } from 'react';
import ImageGalleryView from './ImageGalleryView';

const ImageGalleryContainer=() => {
   const [fetchData, setFetchData] = useState([]);
   const inpRef = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();

      const input = inpRef.current.value.replace(' ', '+');
      if(input === "") return;
      
      const endpoint = `https://pixabay.com/api/?key=${process.env.REACT_APP_KEY_API}&q=${input}&image_type=photo&pretty=true`;
      
      fetch(endpoint)
         .then((resp) => resp.json())
         .then((data) => {
            if (data.total  === 0) {
               inpRef.current.value = null;
               return window.alert('not found image!');
            }
            setFetchData(data.hits)
            inpRef.current.value = null;
         });
   }

   const passProps = {
      inpRef,
      fetchData,
      handleSubmit
   }

   return <ImageGalleryView {...passProps}/>
} 

export default ImageGalleryContainer;
