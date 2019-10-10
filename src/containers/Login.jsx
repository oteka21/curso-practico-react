import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import googleIcon from '../assets/images/google.png'
import twitterIcon from '../assets/images/twitter.png'
import { connect } from 'react-redux'
import { loginRequest } from '../Actions'
import '../assets/styles/components/login.scss'

const loginForm = [
    {
        name: "email",
        type: "text",
        value: ""
    },
    {
        name: "pass",
        type: "password",
        value: ""
    }
]

const mapDispatchToProps = {
    loginRequest
}

export const Login = connect(null,mapDispatchToProps)(({loginRequest, history}) => {

    const { form, handleInput } = useForm(loginForm)
    const { email, pass, } = form

    function handleSubmit(event){
        event.preventDefault()
        const {email : { value: email }, pass: { value: pass } } = form
        // console.log({email, password})
        // console.log(form)
        loginRequest({email , pass})
        history.push('/')
    }
    return (
        <section className="login">
        <div className="login__container">
            <h2>Inicia Sesión</h2>
            <form action="" className="login__container--form" onSubmit={handleSubmit}>
                <input className="login__container--input" placeholder="Correo" {...email} onChange={handleInput} />
                <input className="login__container--input" placeholder='Contraseña' {...pass} onChange={handleInput} />
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
})