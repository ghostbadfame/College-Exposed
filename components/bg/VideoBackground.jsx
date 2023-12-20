import { useEffect, useRef } from 'react';

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

export const VideoBackground = () => {
  const playerRef = useRef(null);

  

  useEffect(() => {

    
    // Load the YouTube player API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Set up the player
    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player(playerRef.current, {
        videoId: 'VMetIDLGaGE',
        playlist: 'VMetIDLGaGE',
        width: VIDEO_WIDTH,
        height: VIDEO_HEIGHT,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          loop: 1,
          modestbranding: 1,
          showinfo: 0,
          start: 0,
          
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(7);
            }
          },
        },


      });
      playerRef.current = player;
    };
  }, []);

  return (
    <div className="video-background ">
      <div id="myvideo" className='' ref={playerRef} />
    </div>
  );
};
