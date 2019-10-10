import React from 'react'
import PropTypes from 'prop-types'
import playIcon from '../assets/images/icons8-play-64.png'
import moreIcon from '../assets/images/icons8-más-64.png'
import deleteIcon from '../assets/images/delete.png'
import { connect } from 'react-redux'
import { setFavorite } from '../Actions'
import { deleteFavorite } from '../Actions'
import { Link } from 'react-router-dom' 
import '../assets/styles/components/CarouselItem.scss'

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export const CarouselItem = connect(null, mapDispatchToProps)(({id, slug, title, year, contentRating, cover, duration, isList, setFavorite, deleteFavorite}) => {
    function handleSetFavorite(){
        setFavorite({id, slug, title, year, contentRating, cover, duration})
    }
    function handleDeleteFavorite(itemId){
        // console.log(itemId)
        deleteFavorite(itemId)
    }
    return (
    <div className="carousel-item">
        <img className='carousel-item__img'src={cover} alt="globe" />
        <div className="carousel-item__details">
            <div>
            <Link to={`/player/${id}`}>
                <img className="carousel-item__details--icon" src={playIcon} />
            </Link>
                {
                    isList 
                    ? <img className="carousel-item__details--icon" src={deleteIcon} onClick={() => handleDeleteFavorite(id)}/>
                    : <img className="carousel-item__details--icon" src={moreIcon} onClick={handleSetFavorite}/>
                }
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} min`}</p>
            </div>
        </div>
    </div>
)})

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    contentRating: PropTypes.string
}

// export { CarouselItem }