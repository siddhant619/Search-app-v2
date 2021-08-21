import React,{useState,useEffect} from 'react'
import ImageList from './ImageList'

const Images = ({results}) => {
    
    return(
        <div className="mx-auto px-2 py-1">
            <ImageList images={results}/>
        </div>
    )
}

export default Images
