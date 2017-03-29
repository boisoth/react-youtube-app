// Props from index of all videos

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props)=>{

  // Add unique key prop when iterating or map

  const VideoItems = props.videos.map((video)=>{
    return (
        <VideoListItem
          key={video.etag}
          video={video}
          onVideoSelect={props.onVideoSelect}
        />
      );
  });

  return(
    <div className="col-md-5 list-group">
      <ul className="">
        { VideoItems }
      </ul>
    </div>
  );
};

export default VideoList;