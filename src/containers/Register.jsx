import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import googleIcon from '../assets/images/google.png'
import twitterIcon from '../assets/images/twitter.png'
import '../assets/styles/components/register.scss'

export const Register = () => {
    const [form, setForm ] = useState({
        email: {
            value: "",
            error: false
        },
        name: {
            value: "",
            error: false
        },
        password: {
            value: "",
            error: false
        }
    })

    function validate({name, value}){
        const emailRegex = new RegExp(/^[^@\.]+@\w+\.\w{3,5}$/)
        switch(name){
            case "email":
                return emailRegex.test(value)
        }
    }
    
    const handleInput = event => {
        const input = {
            name: event.target.name,
            value: event.target.value
        }
        setForm({
            ...form,
            [input.name]: { value: event.target.value, error: !validate(input)}
        })
    }
    return (
    <section className="register">
        <div className="register__container">
            <h2>Inicia Sesión</h2>
            <form action="" className="register__container--form">
                <input className="register__container-input" type="text" placeholder="Nombre" name='name' value={form.name.value} data-error={form.name.error} onChange={handleInput} />
                <input className="register__container-input" type="text" placeholder="Correo" name='email' value={form.email.value} data-error={form.email.error} onChange={handleInput} />
                <input className="register__container-input" type="password" placeholder='Contraseña' name='password' value={form.password.value} data-error={form.password.error} onChange={handleInput} />
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
)}


