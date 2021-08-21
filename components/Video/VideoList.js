import React from 'react'
import VideoItem from  './VideoItem'

class VideoList  extends React.Component {
    render(){
        const VideoComp=this.props.videoList.map( (item)=>{
            return <VideoItem 
                displayVideo={this.displayVideo} 
                key={item.id.videoId} 
                videoItem={item} 
                onVideoSelect={this.props.onVideoSelect}
                />;
    
        });
        return( <div>
            <div className="">
                {VideoComp}
            </div>
        </div>

    )
    }

}

export default VideoList