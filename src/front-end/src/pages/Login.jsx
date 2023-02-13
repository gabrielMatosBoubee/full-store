import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <input type="email" name='Email' onChange={({target: {value}}) => setEmail(value) } />
            <input type="password" name="Password" id="password" 
            onChange={({target: {value}}) => setPassword(value)}/>
            <button type='button'>Login</button>
        </div>
    );
};

export default Login;