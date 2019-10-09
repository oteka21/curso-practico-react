import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/images/logo-platzi.png'
import { Link } from 'react-router-dom'

export const Header = () => (
    <header className="header">
    <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
    </Link>
    <div className="header__menu">
        <div className="header__menu--profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"/></svg>
            <p>Perfil</p>
        </div>
        <div>
            <ul>
                <li><Link to="/login">iniciar sesión</Link></li>
                {/* <li><Link to="/"></Link></li> */}
            </ul>
        </div>
    </div>
</header>
)