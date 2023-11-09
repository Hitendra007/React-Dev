import React, { useState, useContext } from 'react';
import UserContext from '../Context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    const onchangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const onchangeHandlerPass = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={onchangeHandler} placeholder='Username' />{" "}
            <input type="password" onChange={onchangeHandlerPass} placeholder='Password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
