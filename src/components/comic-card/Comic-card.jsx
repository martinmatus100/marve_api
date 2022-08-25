import React from 'react';
import './comic-card.scss';
import { Link } from 'react-router-dom';
import noImage from '../../assets/images/no-image-marvel.jpg';

const ComicCard = props => {
    const item = props.item;
    const link = '/' + item.id;
    var bg = item.images.length !== 0 ? item.images[0].path + '.' + item.images[0].extension : noImage;

    return (
        <Link to={link}>
            <div className="comic-card" style={{ backgroundImage: `url(${bg})` }}>
                <h3 className='comic-card__name'>{item.title}</h3>
            </div>
        </Link>
    );
}

export default ComicCard;