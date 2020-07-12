import React from 'react'
import VideoItem from './VideoItem'

function VideoList({videos,onSelectedVideo}) {
    console.log(onSelectedVideo)
    const renderVideos = videos.map((video)=>
    {
        return <VideoItem video ={video}  key ={video.id.videoId} onSelectedVideo={onSelectedVideo} />
    })
    return (
        <div>
            <h1>{renderVideos} </h1>
           
        </div>
    )
}

export default VideoList
