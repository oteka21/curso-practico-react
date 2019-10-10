import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../Actions'
import { Redirect } from 'react-router-dom' 

import '../assets/styles/components/Player.scss'
function mapStateToProps(state){
    return {
        playing: state.playing
    }
}


const mapDispatchToProps = {
    getVideoSource
}
export const Player = connect(mapStateToProps,mapDispatchToProps)(({history, getVideoSource, playing, match}) => {
    const { id } = match.params
    const hasPlaying = Object.keys(playing).length > 0
    
    useEffect(()=>{
        console.log(id)
        getVideoSource(id)
        console.log(playing)
    },[])
    
    return hasPlaying ? (
        <div>
            <video controls autoPlay>
                <source src={playing[0].source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <h1>Loading..</h1>
    // <Redirect to='/404' />
})