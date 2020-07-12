import React from 'react'
import './videoStyle.css'
import Moment from "react-moment"
function VideoItem({video,onSelectedVideo}) {
    console.log(onSelectedVideo)
    return (
        <div className="videoList" onClick ={() => onSelectedVideo(video)}>
            <div className="video_thumbnail">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            </div>
            <div className="videoBlock_description">
            <h1>{video.snippet.title}</h1>
            <span className="channel_title"> {video.snippet.channelTitle}</span>
            <span>
                <Moment fromNow >
                {video.snippet.publishedAt}
                </Moment>
            </span>
            </div>
            
        </div>
    )
}

export default VideoItem
