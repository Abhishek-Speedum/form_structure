import React, { useRef, useState } from "react";
import './spd_form.css'
import {FaPlay} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';
import {FaStop} from 'react-icons/fa';

function AudioPlayer() {
 const audioPlayer = useRef();
 const [currentTime, setCurrentTime] = useState(0);
 const [seekValue, setSeekValue] = useState(0);

 const spd_play = () => {
   audioPlayer.current.play();
 };

 const spd_pause = () => {
   audioPlayer.current.pause();
 };

 const spd_stop = () => {
   audioPlayer.current.pause();
   audioPlayer.current.currentTime = 0;
 };


 const spd_onPlaying = () => {
   setCurrentTime(audioPlayer.current.currentTime);
   setSeekValue(
     (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
   );
 };

 return (
   <div className="audio_container">
     <audio
       src="https://www.computerhope.com/jargon/m/example.mp3"
       ref={audioPlayer}
       onTimeUpdate={spd_onPlaying}
     >
       <code>audio</code> element.
     </audio>
     <br />
     <h1>Audio Player</h1>
     <p>{currentTime}</p>
     <input
       type="range"
       min="0"
       max="100"
       step="1"
       value={seekValue}
       onChange={(e) => {
         const seekto = audioPlayer.current.duration * (+e.target.value / 100);
         audioPlayer.current.currentTime = seekto;
         setSeekValue(e.target.value);
       }}
     />
     <div>
       <button  onClick={spd_play}><FaPlay/></button>
       <button onClick={spd_pause}><FaPause/></button>
       <button onClick={spd_stop}><FaStop/></button>
     </div>
   </div>
 );
}

export default AudioPlayer;