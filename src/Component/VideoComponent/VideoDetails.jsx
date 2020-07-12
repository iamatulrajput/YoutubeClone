import React from 'react'

function VideoDetails({video}) {
   if (!video) 
   {
       return "loading..."
   }

   let videoUrl =`https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <iframe width="100%" height="500" src={videoUrl}
             frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoDetails;
