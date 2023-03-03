import axios from 'axios'; 
import React, { useState } from 'react';
import style from '../styles/LoginForm.module.css'

function LoginForm() {
    const [email, setEmail] = useState('')
    const [emailValidation, setEmailValidation] = useState(true)
    const [passwordValidation, setPasswordValidation] = useState(true)
    const [password, setPassword] = useState('')

    const loginValidation = () => {
        setEmailValidation(true);
        setPasswordValidation(true);
        const result = {error: false}
      if(!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i.test(email)) {
        setEmailValidation(false);
        result.error = true;
      }
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;
      if (!regex.test(password)) {
        setPasswordValidation(false);
        result.error = true;
    }
      return result
    }
     
    const loginRequest = async () => {
        const { error } = loginValidation()
        if(error) {
            return {error}
        }

        
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

       axios({
        url: 'http://localhost:3000/products', 
        method: 'POST',
        mode: 'no-cors',
        data: {name: 'ga'}
        
    
    }).then((response) => console.log(response))
    //   console.log(t)
    }
 
    return (
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
            <button className={style.login} type='button' onClick={loginRequest}>Login</button>
        </form>
    );
}

export default LoginForm;