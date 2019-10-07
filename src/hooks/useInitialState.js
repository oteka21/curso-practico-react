import { useState, useEffect } from 'react'

export const useInitialState = () => {
    const [ videos, setVideos ] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/category')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setVideos(data)
        })
    }, [])

    return videos
}