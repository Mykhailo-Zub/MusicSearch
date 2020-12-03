import React from 'react';
import { Link } from 'react-router-dom';
import style from './ShowTrack.module.css';

const ShowTrack = ({ position, artist, name }) => {
    return (
        <Link to='/about' className={style.wrapper}>
            <div className={style.position}>{position + 1}.&nbsp;</div>
            <div className={style.artist}>{artist} -&nbsp;</div>
            <div className={style.title}>{name}</div>
        </Link>
    );
};

export default ShowTrack;
