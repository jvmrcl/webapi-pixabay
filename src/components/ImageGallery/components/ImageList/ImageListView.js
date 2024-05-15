import React from 'react'

const ImageListView = ({ images, imagesAlt }) => {
  return (
  <div className='images-wrapper'>
    {images.map((img) => (
      <div className='image' key={img.id}>
        <a href={img.pageURL} target='_blank' rel="noreferrer">
          <img
            src={img.largeImageURL}
            alt=''
          />
        </a>
        <label>
          <strong>Views: {img.views}</strong> -
          <strong> Comments: {img.comments}</strong>  
        </label>
      </div>
    ))}
  </div>
  )
}

export default ImageListView
