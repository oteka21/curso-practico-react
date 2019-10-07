import React from 'react'
import '../assets/styles/components/Carousel.scss'

export const Carousel = ({ children, title = "Mi lista" }) => (
    <section className="carousel">
        <div className="carousel__container">
            <h3 className='carousel__title'>{title}</h3>
            {children}
        </div>
    </section>
)