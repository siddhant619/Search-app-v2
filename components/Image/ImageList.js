import ImageCard from './ImageCard'
import React from 'react'

const ImageList= ({images})=>{
    const imageTags=images && images.map( (image)=>{
        return <ImageCard image={image} key={image.id}  />;
    } );
    return ( 
        <div className="image-container">
            {imageTags}
        </div>
    )
}

export default ImageList