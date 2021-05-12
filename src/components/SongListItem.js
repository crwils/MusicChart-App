import React from 'react';

const SongListItem = ({song}) => {
    
    return (
    <li> 
        <h3>{song['im:artist'].label}</h3>
        <p>{song['im:name'].label}</p>
        <img src={song['im:image'][1].label} />
        <br />
        <button>
            <a href={song.link[0].attributes.href}>Preview</a>
        </button>
        <hr/>
    </li>
    )
}

export default SongListItem;