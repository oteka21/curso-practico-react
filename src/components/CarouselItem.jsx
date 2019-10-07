import React from 'react'
import PropTypes from 'prop-types'
import play from '../assets/images/icons8-play-64.png'
import more from '../assets/images/icons8-más-64.png'
import '../assets/styles/components/CarouselItem.scss'

export const CarouselItem = ({slug, title, year, contentRating, cover, duration}) => (
    <div className="carousel-item">
        <img className='carousel-item__img'src={cover} alt="globe" />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--icon" src={play} />
                <img className="carousel-item__details--icon" src={more} />
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} min`}</p>
            </div>
        </div>
    </div>
)

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    contentRating: PropTypes.string
}

// export { CarouselItem }