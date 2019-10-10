import React, { Fragment } from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/images/logo-platzi.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutRequest } from '../Actions'

function mapStateToProps (state){
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
     logoutRequest
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(({user, logoutRequest}) => {

    const validateUser = user => Object.keys(user).length > 0

    function handleLogout(){
        logoutRequest({})
    }

    return (
    <header className="header">
    <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
    </Link>
    <div className="header__menu">
    {
        validateUser(user) ?
        <Fragment>
            <div className="header__menu--profile">
                    <img src={`https://ui-avatars.com/api/?size=128&name=leonardo+oteca&rounded=true`} width="40" height="40" className='header__menu-avatar' />
                <p>Perfil</p>
            </div>
            <div>
                <ul>
                    <li><a role="button" onClick={handleLogout}>Cerrar sesión</a></li>
                </ul>
            </div>
        </Fragment>
            : <div className='header__menu--profile'><Link to="/login">Iniciar sesión</Link></div>
    }
    </div>
</header>
)})