import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTopSongs from '../../redux/getTopAction';
import getArtistInfo from '../../redux/getArtistAction';
import ShowTrack from '../showTrack/ShowTrack.js';
import style from './Main.module.css';

class Main extends Component {
    componentDidMount() {
        const method = 'chart.gettoptracks';
        const apiKey = '20f6e218a31dde21404bc8beb287d24f';
        const url = `https://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${apiKey}&format=json`;
        this.props.getTopSongs(url);
    }

    showAbout = (name) => {
        const method = 'artist.getInfo';
        const apiKey = '20f6e218a31dde21404bc8beb287d24f';
        const url = `https://ws.audioscrobbler.com/2.0/?method=${method}&artist=${name}&api_key=${apiKey}&format=json`;
        this.props.getArtistInfo(url);
    };

    render() {
        const tracks = this.props.songs?.tracks?.track;
        return (
            <div className={style.wrapper}>
                <h1 className={style.header}>Top 50 Last.FM</h1>
                <div className={style.trackContainer}>
                    {tracks?.map((el, index) => {
                        return (
                            <div className={style.track}>
                                <button
                                    key={index}
                                    type='button'
                                    onClick={this.showAbout.bind(
                                        this,
                                        el.artist.name
                                    )}>
                                    <ShowTrack
                                        key={index}
                                        position={index}
                                        artist={el.artist.name}
                                        name={el.name}
                                    />
                                </button>
                                <a
                                    key={index}
                                    className={style.link}
                                    href={el.url}
                                    target='_blank'
                                    rel='noreferrer'>
                                    Track page on Last.FM
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        songs: state.getTopReducer,
    };
};

const mapDispatch = (dispatch) => {
    return {
        getTopSongs: (url) => dispatch(getTopSongs(url)),
        getArtistInfo: (url) => dispatch(getArtistInfo(url)),
    };
};

export default connect(mapState, mapDispatch)(Main);
