import React from 'react';
import './RecommendedVideos.css'
import VideoCard from './VideoCard';

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                {[0, 1, 2, 3, 4, 5].map(data => (<VideoCard
                    title="Deneme"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="Berkay Özdemir"
                    image="https://i.ytimg.com/vi/0pThnRneDjw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCvK0Bi1naQJuqpiNqaST3zTtePQg"
                />))}
            </div>
        </div>
    )
}

export default RecommendedVideos;