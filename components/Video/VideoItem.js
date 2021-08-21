import React from 'react'

class VideoItem extends React.Component{
    
    selectVideo=()=>{
        this.props.displayVideo(this.props.onVideoSelect);
    }
    render(){
        
        return(
            <div className="flex cursor-pointer gap-2 mb-3 hover:bg-gray-100" onClick={()=>this.props.onVideoSelect(this.props.videoItem)}>
                <div className="lg:w-2/5 w-4/12">
                    <img alt={this.props.videoItem.snippet.title} src={this.props.videoItem.snippet.thumbnails.medium.url} />
                </div>
                <div className="lg:w-3/5 w-8/12 ">
                    <div className="font-bold line-clamp-2">{this.props.videoItem.snippet.title}</div>
                    <div className="mt-1 text-sm text-gray-500 line-clamp-1">
                        <span>{this.props.videoItem.snippet.channelTitle}  </span>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default VideoItem