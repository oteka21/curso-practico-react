import React, { useState, useEffect, Fragment } from 'react'
import { Search } from '../components/Search'
import { Carousel } from '../components/Carousel'
import { CarouselItem } from '../components/CarouselItem'

//hooks
import { useInitialState } from '../hooks/useInitialState'

import '../assets/styles/App.scss'

export const Home = () => {
    const videos = useInitialState()
    //function to render each video
    function renderItem(item){
        return item.list.map(video => (
            <CarouselItem {...video} key={video.id}/>
        ))
    }

    return <Fragment>
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
    </Fragment>
}