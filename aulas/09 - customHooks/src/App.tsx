import React from 'react';
import './index.css';
import videoSrc from './video.mp4';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const video = React.useRef<HTMLVideoElement>(null);
  // Como está usando o tuples(posição fixa de arrays), o primeiro sempre é string e o segundo sempre é uma função.
  const [ volume, setVolume ] = useLocalStorage('volume', '0')

  React.useEffect(() => {
    if(!video.current) return
    const numero = Number(volume)
    if(numero >= 0 && numero <= 100) {
      video.current.volume = numero / 100
    }
  }, [volume])

  return (
    <div>
      {volume}
      <div className="flex">
        <button onClick={() => setVolume('0')}>0</button>
        <button onClick={() => setVolume('50')}>50</button>
        <button onClick={() => setVolume('100')}>100</button>
      </div>
      <video ref={video} controls src={videoSrc}></video>
    </div>
  );
};

export default App;
