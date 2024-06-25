import React, { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, isLastVideo, isPlaying, startPlay, videoId } = video;

  useEffect(() => {
    if (loadedData.length > 3) {
      if (isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [isPlaying, startPlay, videoId, loadedData]);

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animate the progress of video
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {},
      });
    }
  }, [startPlay, videoId]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((highlight, i) => (
          <div key={highlight.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() =>
                    setVideo((prevVideo) => ({ ...prevVideo, isPlaying: true }))
                  }
                >
                  <source src={highlight.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left[5%] z-10">
                {highlight.textLists.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
