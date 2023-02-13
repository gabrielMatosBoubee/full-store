import React, { useState } from 'react';
import SignInGoogle from '../components/SignInGoogle';
import style from '../styles/Login.module.css'
import img from '../images/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={style.Login}>
            <img src={img} className={style.logo} alt="logo" />
            <main className={style.main}>
                <div>
                <h2 className={style.title}>Login</h2>
                <p className={style.text}>Don't have an account? <Link 
                className={style.registerLink} to='/register'>Create Now</Link>
                </p>
                </div>

            <form action="" className={style.form}>
             <label className={style.fieldLabel}>
            <p className={style.fieldName}>Email</p>

            <input 
                className={style.field} 
                type="email" 
                name='Email' 
                onChange={({target: {value}}) => setEmail(value) } 
            />

            </label>
            <label htmlFor="password" className={style.fieldLabel}>
            <p className={style.fieldName}>Password</p>
            <input 
                className={style.field}
                type="password"
                name="Password" 
                id="password" 
                onChange={({target: {value}}) => setPassword(value)}
                />
            </label>
            <button className={style.login} type='button'>Login</button>
                </form>
                <div>

                <p className={style.text}>Forgot a password?</p>
                <p className={style.Or}>Or</p>
                </div>
            <SignInGoogle />
            </main>
        </div>
    );
};

export default Login;