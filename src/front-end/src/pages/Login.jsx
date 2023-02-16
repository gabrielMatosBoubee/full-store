import React from 'react';
import SignInGoogle from '../components/SignInGoogle';
import style from '../styles/Login.module.css'
import img from '../images/logo.png'
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
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
                <LoginForm />           
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