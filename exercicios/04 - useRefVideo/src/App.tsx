import React from 'react';
import './index.css';
import videoSrc from './video.mp4';

const App = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = React.useState<'Play' | 'Pause'>('Play');

  const playVideo = () => {
    if (!video.current) return;
    if (videoState === 'Play') {
      video.current.play();
      setVideoState('Pause');
    } else {
      video.current.pause();
      setVideoState('Play');
    }
  };

  const addTime = () => {
    if(!video.current) return
    video.current.currentTime += 2;
  };

  const playBackRat = (speed: number) => {
    if (!video.current) return;
    video.current.playbackRate = speed;
  };

  const mute = () => {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
  };

  const pictureVideo = () => {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      video?.current.requestPictureInPicture();
    }
  };

  return (
    <div>
      <div className="flex">
        <button onClick={playVideo}>{videoState}</button>
        <button onClick={addTime}>+2s</button>
        <button onClick={() => playBackRat(1)}>1x</button>
        <button onClick={() => playBackRat(2)}>2x</button>
        <button onClick={pictureVideo}>PiP</button>
        <button onClick={mute}>M</button>
      </div>

      <video
        ref={video}
        controls
        src={videoSrc}
        onPlay={() => setVideoState('Pause')}
        onPause={() => setVideoState('Play')}
      ></video>
    </div>
  );
};

export default App;
