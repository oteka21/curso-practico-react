import React from 'react'
import { Link } from 'react-router-dom'
import googleIcon from '../assets/images/google.png'
import twitterIcon from '../assets/images/twitter.png'
import '../assets/styles/components/login.scss'

export const Login = () => {
    return (
        <section className="login">
        <div className="login__container">
            <h2>Inicia Sesión</h2>
            <form action="" className="login__container--form">
                <input className="login__container--input" type="text" placeholder="Correo" />
                <input className="login__container--input" type="password" placeholder='Contraseña' />
                <button className="login__container--button">
                    Iniciar sesión
                </button>
                <div className="login__container--remember-me">
                    <label htmlFor="cbox1">
                        <input type="checkbox" id="cbox1" value="OK" /> Recuerdame
                    </label>
                    <a href="/" >Olvidé mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={googleIcon} alt="Google logo" className="social-logo" />Inicia sesión con google</div>
                <div><img src={twitterIcon} alt="twitter logo" className="social-logo" />Inicia sesión con Twitter</div>
            </section>
            <p className="login__container--register">
                No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
            </p>
        </div>
    </section>
    )
}