import React, { useState } from 'react';
import SignInGoogle from '../components/SignInGoogle';
import style from '../styles/Login.module.css'
import img from '../images/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [emailValidation, setEmailValidation] = useState(true)
    const [passwordValidation, setPasswordValidation] = useState(true)
    const [password, setPassword] = useState('')

    const loginValidation = () => {
        setEmailValidation(true);
        setPasswordValidation(true);
      if(!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i.test(email)) {
        setEmailValidation(false)
      }
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;
      if (!regex.test(password)) {
        setPasswordValidation(false)
    }
    }

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
            {emailValidation ? <></> : 
            <p className={style.error}>The "email" must have the formart "email@email.com"</p>
            }
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
            {passwordValidation ? <></> : 
            <p className={style.error}>Minimum eight 
            characters, at least one uppercase letter, 
            one lowercase letter, one number and one special character
            </p>
            }
            </label>
            <button className={style.login} type='button' onClick={loginValidation}>Login</button>
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