import React from 'react'
import '../assets/styles/components/Search.scss'

export const Search = () => (
    <section className='search-container'>
        <h2 className='search'>
            ¿Qué quieres ver hoy?
        </h2>
        <input className='search-input' type='text' placeholder='Buscar...'/>
    </section>
)