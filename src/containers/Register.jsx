import React from 'react'
import { Link } from 'react-router-dom'
import googleIcon from '../assets/images/google.png'
import twitterIcon from '../assets/images/twitter.png'
import '../assets/styles/components/register.scss'

export const Register = () => (
    <section className="register">
        <div className="register__container">
            <h2>Inicia Sesión</h2>
            <form action="" className="register__container--form">
                <input className="register__container-input" type="text" placeholder="Nombre" />
                <input className="register__container-input" type="text" placeholder="Correo" />
                <input className="register__container-input" type="password" placeholder='Contraseña' />
                <button className="register__container-button">
                    Registrarme
                </button>
            </form>
            <section className="login__container--social-media">
                <div><img src={googleIcon} alt="Google logo" className="social-logo" />Inicia sesión con google</div>
                <div><img src={twitterIcon} alt="twitter logo" className="social-logo" />Inicia sesión con Twitter</div>
            </section>
            <Link to='/login'>
                Iniciar sesión
            </Link>
        </div>
    </section>
)


