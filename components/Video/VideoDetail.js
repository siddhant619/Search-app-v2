import React from 'react'
//This is the main video
const VideoDetail=(props)=>{
    //console.log('in videodetail');
    if(props.video==null){ //conditional rendering
        return <div></div>
    }
    const videoSrc=`https://www.youtube.com/embed/${props.video.id.videoId}`;
    return(<div>
        <br></br>
        <div className="w-full">
            <iframe className="w-full h-96" title="video player" src={videoSrc}></iframe>    
        </div>

        <div className="mt-4 pr-8">
            <div className="text-xl font-semibold line-clamp-2">{props.video.snippet.title}</div>
            <div className="mt-1 line-clamp-2">{props.video.snippet.description}</div>
        </div>
    </div>

    )
}
export default VideoDetail