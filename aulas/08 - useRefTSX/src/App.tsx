import React from 'react';
import './index.css';
import videoSrc from './video.mp4';

const App = () => {
  // Com o useRef é nescessário indicar o tipo do elemento selecionado
  const video = React.useRef<HTMLVideoElement>(null);

  return (
    <div>
      <div className='flex'>
        <button onClick={() => video?.current.play()}>Play</button>
        <button onClick={() => video?.current.pause()}>Pause</button>
      </div>

      <video ref={video} src={videoSrc} controls></video>
    </div>
  );
};

export default App;
