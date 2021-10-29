import React, { useEffect, useRef, useState } from 'react';

const SongListItem = ({position, title, artist, image, audio}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioSrc = useRef(null);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        isPlaying ? audioSrc.current.play() : audioSrc.current.pause()
    }, [isPlaying]);

    
    return (
    <div className="song-entry-wrapper">
        <img 
        style={{height: "50px"}}
        alt="play button"
        id={position}
        src="https://image.freepik.com/free-icon/play-button_318-42541.jpg"
        onClick={handlePlayPause}
            />
        <img alt="song artwork" src={image} />
        <div className="details">
            <h3>{position}. {title}</h3>
            <h4>{artist}</h4>
        </div>
        
        <audio src={audio} ref={audioSrc}/>
    </div>    
    )
}

export default SongListItem;