import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import './Videoplayer.css';

const Videoplayer = () => {

    const playerRef = useRef(null);
    const containerRef = useRef(null);

    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(true);
    const [played, setPlayed] = useState(0); // 0~1

    const togglePlay = () => setPlaying(!playing);
    const toggleMute = () => setMuted(!muted);

    const handleProgress = (state) => {
        setPlayed(state.played);
    };

    const handleSeek = (e) => {
        const rect = e.target.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = clickX / rect.width;
        playerRef.current.seekTo(percentage, 'fraction');
    };

    const handleFullscreen = () => {
        const element = containerRef.current;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    };

    return (
        <div ref={containerRef} className="relative">
            <ReactPlayer
                ref={playerRef}
                url="https://www.youtube.com/watch?v=ekr2nIex040"
                playing={playing}
                controls={true}
                muted={muted}
                loop
                onProgress={handleProgress}
            />
{/* 
            <div className="Videocontroller">
                <div
                    className="VideoProgressbar"
                    onClick={handleSeek}
                >
                    <div
                        className="h-full bg-red-500 rounded"
                        style={{ width: `${played * 100}%` }}
                    ></div>
                </div>
                <div className="VideoButtons">
                    <button onClick={togglePlay} className="px-4 py-2 bg-black/60 text-white rounded">
                        {playing ? 'Pause' : 'Play'}
                    </button>
                    <button onClick={toggleMute} className="px-4 py-2 bg-black/60 text-white rounded">
                        {muted ? 'Unmute' : 'Mute'}
                    </button>
                    <button onClick={handleFullscreen} className="px-4 py-2 bg-black/60 text-white rounded">
                        Fullscreen
                    </button>
                </div>
            </div> */}
            
        </div>
    );
};

export default Videoplayer;