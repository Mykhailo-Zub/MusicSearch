import React, { Component } from 'react';
import { connect } from 'react-redux';
import getSearchSongs from '../../redux/getSearchAction';
import getArtistInfo from '../../redux/getArtistAction';
import ShowTrack from '../showTrack/ShowTrack.js';
import style from './Search.module.css';

class Search extends Component {
    state = {
        track: '',
        page: 1,
    };

    searchByName = (page) => {
        const method = 'track.search';
        const apiKey = '20f6e218a31dde21404bc8beb287d24f';
        const url = `https://ws.audioscrobbler.com/2.0/?method=${method}&track=${this.state.track}&page=${page}&api_key=${apiKey}&format=json`;
        this.props.getSearchSongs(url);
    };

    handleSearchChange = (e) => {
        this.setState({
            track: e.target.value,
        });
    };

    prevPage = () => {
        const currentPage = this.state.page - 1;
        this.setState({
            page: currentPage,
        });
        this.searchByName(currentPage);
    };

    nextPage = () => {
        const currentPage = this.state.page + 1;
        this.setState({
            page: currentPage,
        });
        this.searchByName(currentPage);
    };

    showAbout = (name) => {
        const method = 'artist.getInfo';
        const apiKey = '20f6e218a31dde21404bc8beb287d24f';
        const url = `https://ws.audioscrobbler.com/2.0/?method=${method}&artist=${name}&api_key=${apiKey}&format=json`;
        this.props.getArtistInfo(url);
    };

    render() {
        const tracks = this.props.search?.results?.trackmatches?.track;
        const lastPage = Math.ceil(
            parseInt(this.props.search?.results?.['opensearch:totalResults']) /
                30
        );
        return (
            <div className={style.wrapper}>
                <h1 className={style.header}>Search</h1>
                <input
                    className={style.input}
                    type='text'
                    onChange={(e) => this.handleSearchChange(e)}
                    placeholder='Search for music...'
                />
                <button
                    type='button'
                    className={style.button}
                    onClick={this.searchByName}>
                    Search track
                </button>
                <div className={style.navButtons}>
                    <button
                        className={
                            this.state.page === 1
                                ? style.disable
                                : style.navBtnPrev
                        }
                        type='button'
                        onClick={this.prevPage}>
                        Previos page
                    </button>
                    <button
                        className={
                            this.state.page === lastPage || !tracks
                                ? style.disable
                                : style.navBtnNext
                        }
                        type='button'
                        onClick={this.nextPage}>
                        Next page
                    </button>
                </div>
                <div className={style.trackContainer}>
                    {tracks?.map((el, index) => {
                        return (
                            <div className={style.track}>
                                <button
                                    key={index}
                                    type='button'
                                    onClick={this.showAbout.bind(
                                        this,
                                        el.name
                                    )}>
                                    <ShowTrack
                                        position={
                                            this.state.page === 1
                                                ? index
                                                : index + 30 * this.state.page
                                        }
                                        artist={el.artist}
                                        name={el.name}
                                    />
                                </button>
                                <a
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
                <div className={style.navButtons}>
                    <button
                        className={
                            this.state.page === 1
                                ? style.disable
                                : style.navBtnPrev
                        }
                        type='button'
                        onClick={this.prevPage}>
                        Previos page
                    </button>
                    <button
                        className={
                            this.state.page === lastPage || !tracks
                                ? style.disable
                                : style.navBtnNext
                        }
                        type='button'
                        onClick={this.nextPage}>
                        Next page
                    </button>
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        search: state.getSearchReducer,
    };
};

const mapDispatch = (dispatch) => {
    return {
        getSearchSongs: (url) => dispatch(getSearchSongs(url)),
        getArtistInfo: (url) => dispatch(getArtistInfo(url)),
    };
};

export default connect(mapState, mapDispatch)(Search);
