import React, { useRef, useState } from "react";
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaStop } from 'react-icons/fa';

const VideoPlayer = () => {
    const videoPlayer = useRef();
    const [currentTime, setCurrentTime] = useState(0);
    const [seekValue, setSeekValue] = useState(0);

    const spd_play = () => {
        videoPlayer.current.play();
    };

    const spd_pause = () => {
        videoPlayer.current.pause();
    };

    const spd_stop = () => {
        videoPlayer.current.pause();
        videoPlayer.current.currentTime = 0;
    };

    const setSpeed = (speed) => {
        videoPlayer.current.playbackRate = speed;
    };

    const onPlaying = () => {
        setCurrentTime(videoPlayer.current.currentTime);
        setSeekValue(
            (videoPlayer.current.currentTime / videoPlayer.current.duration) * 100
        );
    };

    return (
        <div className="video_container">
            <h1>Video Player </h1>
            <video
                width="380"
                height="260"
                ref={videoPlayer}
                onTimeUpdate={onPlaying}
            >
                <source
                    src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
                    type="video/mp4"
                />
         
            </video>
            <br />

            <p>{currentTime}</p>
            <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={seekValue}
                onChange={(e) => {
                    const seekto = videoPlayer.current.duration * (+e.target.value / 100);
                    videoPlayer.current.currentTime = seekto;
                    setSeekValue(e.target.value);
                }}
            />
            <br />
            <div>
                <button onClick={spd_play}><FaPlay /></button>
                <button onClick={spd_pause}><FaPause /></button>
                <button onClick={spd_stop}><FaStop /></button>
                <br />
                <button onClick={() => setSpeed(0.5)}>0.5x</button>
                <button onClick={() => setSpeed(1)}>1x</button>
                <button onClick={() => setSpeed(1.5)}>1.5x</button>
                <button onClick={() => setSpeed(2)}>2x</button>
            </div>
        </div>
    );
}

export default VideoPlayer;