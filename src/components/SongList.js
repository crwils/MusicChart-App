import React from 'react';
import SongListItem from './SongListItem';

const SongList = ({ songs }) => {

    const songItems = songs.map((song, index) => {
        return <SongListItem song={song} key={index} />
    })

    return(
            <div>
                <ol>
                    {songItems}
                </ol>
            </div>
    )
}

export default SongList;