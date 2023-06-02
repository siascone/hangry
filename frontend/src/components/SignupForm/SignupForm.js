import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session'
import { NavLink } from 'react-router-dom';
import './SignupForm.css'

function SignupForm () {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const history = useHistory();

    const dispatch = useDispatch();

    const demoLogin = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({
            email: 'john.spartain@sapd.io',
            password: 'threeseashells'
        })).then(() => {
            history.push('/')
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setErrors([]);

        return dispatch(sessionActions.signup({ email, password, username }))
            .then(() => {
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
                    else if (data) setErrors(data);
                    else setErrors([res.statusText]);
            });
    };

    return (
        <div className='signup-form-container'>
            <form onSubmit={handleSubmit} className='signup-form'>
                <h2>Sign Up for Hangry?</h2>
                <h3>Connect with great local businesses</h3>
                <button onClick={demoLogin} className='demo-login'>Demo Login</button>

                <fieldset>
                    <legend align='center'>OR</legend>
                </fieldset>

                <ul className='session-errors'>
                    {
                        errors.map((error, i) => {
                            return <li key={i}>{error}</li>
                        })
                    }
                </ul>

                <input 
                    type="text" 
                    placeholder="Email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
            
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Sign Up</button>
                <p>Already on Hangry? <NavLink to='/login/' className="signup-login-link-lower">Sign up</NavLink></p>
            </form>
            <div className='session-illustration'>
            </div>
        </div>
    );
};

export default SignupForm;