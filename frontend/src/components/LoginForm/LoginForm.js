import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginForm.css'

function LoginForm() {
    const [email, setEmal] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const history = useHistory();

    const demoLogin = (e) => {
        debugger
        console.log(e, 'from demoLogin')
        e.preventDefault();
        dispatch(sessionActions.login({
            email: 'john.spartain@sapd.io',
            password: 'threeseashells'
        })).then(() => {
            history.push('/')
        })
    }

    const handleSubmit = (e) => {
        debugger
        console.log(e, 'from handleSubmit')

        e.preventDefault();
        e.stopPropagation();
        setErrors([]);
        dispatch(sessionActions.login({ email, password }))
            .then((res) => {
                history.push('/')
            })
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); 
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    };

    return (
        <div className='login-form-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <h2>Login to Hangry?</h2>
                <h3>New to Hangry? <NavLink to='/signup/' className="login-signup-link">Sign up</NavLink></h3>
                <button onClick={demoLogin} className='demo-login'>Demo Login</button>

                <fieldset>
                    <legend align='center'>OR</legend>
                </fieldset>
                <ul className='session-errors'>
                    {errors.map((error) => <li key={error}>{error}</li>)}
                </ul>

                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmal(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Log In</button>
                <p>New to Hangry? <NavLink to='/signup/' className="login-signup-link-lower">Sign up</NavLink></p>
            </form>
            <div className='session-illustration'>
                
            </div>
        </div>
    );
};

export default LoginForm;