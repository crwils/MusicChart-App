import React, { useState, useEffect } from 'react';
import SongListItem from '../components/SongListItem';
import SongList from '../components/SongList';

const SongContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <div className="main-container">
            <SongList songs={songs} />
        </div>
    )
}

export default SongContainer;