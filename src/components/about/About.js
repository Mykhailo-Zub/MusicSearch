import React from 'react';
import { connect } from 'react-redux';
import style from './About.module.css';

const About = (props) => {
    console.log(props);
    const name = props.about?.artist?.name;
    let bio = props.about?.artist?.bio?.content;
    const startLink = bio?.indexOf('<');
    const endLink = bio?.lastIndexOf('>') + 1;
    if (startLink && endLink) {
        const link = props.about?.artist?.bio?.content.slice(
            startLink,
            endLink
        );
        bio = bio.replace(link, '');
    }
    if (bio) {
        return (
            <div className={style.wrapper}>
                <button
                    className={style.backBtn}
                    type='button'
                    onClick={() => props.history.goBack()}>
                    &lt; BACK
                </button>
                <h1 className={style.header}>All about "{name}"</h1>
                <div className={style.topPanel}>
                    <img
                        src={props.about?.artist?.image[2]['#text']}
                        alt='artist'
                    />
                    <div className={style.tags}>
                        <p>Tags:</p>
                        {props.about?.artist?.tags?.tag?.map((el, i) => (
                            <p className={style.tag}>
                                <a
                                    className={style.tagLink}
                                    href={el.url}
                                    key={i}>
                                    {el.name}.
                                </a>
                            </p>
                        ))}
                    </div>
                </div>

                <a className={style.link} href={props.about?.artist?.url}>
                    Learn more about "{props.about?.artist?.name}" on Last.FM
                </a>

                <p className={style.about}>{bio}</p>
            </div>
        );
    } else if (name) {
        return (
            <div className={style.wrapper}>
                <button
                    className={style.backBtn}
                    type='button'
                    onClick={() => props.history.goBack()}>
                    &lt; BACK
                </button>
                <h1 className={style.header}>All about "{name}"</h1>
                <div className={style.topPanel}>
                    <div className={style.tags}>
                        <p>Tags:</p>
                        {props.about?.artist?.tags?.tag?.map((el, i) => (
                            <p className={style.tag}>
                                <a
                                    className={style.tagLink}
                                    href={el.url}
                                    key={i}>
                                    {el.name}.
                                </a>
                            </p>
                        ))}
                    </div>
                </div>

                <a className={style.link} href={props.about?.artist?.url}>
                    Learn more about "{props.about?.artist?.name}" on Last.FM
                </a>
            </div>
        );
    } else {
        return (
            <div className={style.wrapper}>
                <button
                    className={style.backBtn}
                    type='button'
                    onClick={() => props.history.goBack()}>
                    &lt; BACK
                </button>
                <h1>Artist not found</h1>
            </div>
        );
    }
};

const mapState = (state) => {
    return {
        about: state.getArtistReducer,
    };
};

export default connect(mapState, null)(About);
