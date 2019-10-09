import React, { useState, useEffect, Fragment } from 'react'
import { Search } from '../components/Search'
import { Carousel } from '../components/Carousel'
import { CarouselItem } from '../components/CarouselItem'
import { connect } from 'react-redux'

//hooks
// import { useInitialState } from '../hooks/useInitialState'

import '../assets/styles/App.scss'

function mapStateToProps(state){
    return {
        myList: state.myList,
        category: state.category
    }
}

export const Home = connect(mapStateToProps)(({ category= [], myList = [] }) => {

    const varTostring = myVar => Object.keys(myVar)[0]

    function renderItem(item, isList = false){
        return item.map((video, key) => (
            <CarouselItem {...video} key={key} isList={isList} />
        ))
    }

    return <Fragment>
        <Search />
        {
            myList.length > 0 &&
            <Carousel title='Favorites'>
                {renderItem(myList,true)}
            </Carousel>
        }
        {
            category.map((item, key) => (
                item.list.length > 0 &&
                <Carousel title={item.title} key={key}>
                    {
                        renderItem(item.list)
                    }
                </Carousel>
            ))
        }
    </Fragment>
})



// export const Header = connect(mapStateToProps)(HComponent)