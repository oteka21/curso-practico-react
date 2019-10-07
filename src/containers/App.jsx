import React, { useState, useEffect, Fragment } from 'react'
import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { Carousel } from '../components/Carousel'
import { CarouselItem } from '../components/CarouselItem'
import { Footer } from '../components/Footer'

//hooks
import { useInitialState } from '../hooks/useInitialState'

import '../assets/styles/App.scss'

export const App = () => {
    const videos = useInitialState()
    //function to render each video
    function renderItem(item){
        return item.list.map(video => (
            <CarouselItem {...video} key={video.id}/>
        ))
    }

    return <Fragment>
        <Header />
        <Search />
        {
            videos.map((item, key) => (
                item.list.length > 0 &&
                <Carousel title={item.title} key={key}>
                    {
                        renderItem(item)
                    }
                </Carousel>
            ))
        }
        <Footer />
    </Fragment>
}