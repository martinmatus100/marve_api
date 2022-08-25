import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import marvelApi from '../../api/marvelApi';
import './detail.scss';
import noImage from '../../assets/images/no-image-marvel.jpg';

const Detail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const params = {};
            const response = await marvelApi.getComic(id, params);
            setItem(response.data.results);
            window.scrollTo(0, 0);
        };

        getDetail();
    }, [id]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{ backgroundImage: `url(${item[0].images.length !== 0 ? item[0].images[0].path + '.' + item[0].images[0].extension : noImage})` }}></div>
                        <div className="comic-content container">
                            <div className="comic-content__poster">
                                <div className="comic-content__poster__img" style={{ backgroundImage: `url(${item[0].images.length !== 0 ? item[0].images[0].path + '.' + item[0].images[0].extension : noImage})` }}></div>
                            </div>
                            <div className="comic-content__info">
                                <h1 className="title">
                                    {item[0].title}
                                </h1>
                                <div className="stories">
                                    <div className="section__header">
                                        <h2>Stories</h2>
                                    </div>
                                    <div className="stories__list">
                                        {
                                            item[0].stories.items && item[0].stories.items.map((storie, i) => (
                                                <span key={i} className="stories__item">{storie.name}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="creators">
                                    <div className="section__header">
                                        <h2>Creators</h2>
                                    </div>
                                    <div className="creators__list">
                                        {
                                            item[0].creators.items && item[0].creators.items.map((creator, i) => (
                                                <span key={i} className="creators__item">{creator.name}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;