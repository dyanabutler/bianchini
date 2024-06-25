// src/components/VideoPlayer/VideoPlayer.tsx
import React, { useEffect, useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
import { useInView } from "react-intersection-observer";

const VidPlayer: React.FC<{ videoRef: React.RefObject<HTMLVideoElement> }> = ({ videoRef }) => {
  return (
    <CloudinaryContext cloud_name="danimtxr1">
      <Video
        publicId="hero-video_kkpv0c"
        width="100%"
        controls
        data-cld-autoplay-mode="on-scroll"
        innerRef={videoRef}
      />
    </CloudinaryContext>
  );
};

VidPlayer.displayName = 'VidPlayer';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play();
    }
  }, [inView]);

  return (
    <div ref={ref} className="mx-auto max-w-full flex justify-center items-center">
      <VidPlayer videoRef={videoRef} />
    </div>
  );
};

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
