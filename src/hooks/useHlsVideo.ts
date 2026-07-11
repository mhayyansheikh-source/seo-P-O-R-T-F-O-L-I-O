import { useEffect } from 'react';
import type { RefObject } from 'react';
import Hls from 'hls.js';

export function useHlsVideo(videoRef: RefObject<HTMLVideoElement | null>, videoSrc: string) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    }
  }, [videoRef, videoSrc]);
}
