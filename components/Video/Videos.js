import React,{useState,useEffect, useContext} from 'react'
import { SearchOptionContext } from '../../contexts/SearchOptionContext'
import youtube from '../../pages/api/Youtube'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

 const Videos = ({results}) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const {setNextPageToken,setPrevPageToken}=useContext(SearchOptionContext);

    console.log(results);
    const onVideoSelect=(video)=>{
        setSelectedVideo(video)
    }
    useEffect(() => {
        setSelectedVideo(results.items[0]);
        setNextPageToken(results.nextPageToken);
        results.prevPageToken===undefined? setPrevPageToken(''):setPrevPageToken(results.prevPageToken);
    }, [results])
    return (
            
        <div className="w-full mx-auto px-3 sm:px-6 md:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8 gap-y-8">
                <div className="col-span-3 ">
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className="col-span-2 ">                 
                    <VideoList videoList={results.items} onVideoSelect={onVideoSelect}  />
                </div>
            </div>
        </div>
    )
}
export default Videos