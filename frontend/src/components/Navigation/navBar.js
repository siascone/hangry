import { NavLink, useParams, useLocation} from 'react-router-dom';
import './navbar.css'
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useEffect, useState } from 'react';

function NavBar() {
    let [sessionLinks, setSessionLinks] = useState(<></>);
    let currentUser = useSelector(state => state.session.user);
    let {pathname} = useLocation();

    useEffect(() => {
        sessionLinks = <div className='navbar-right'></div>
    }, [])


    if (!currentUser) {
        sessionLinks = <div className='navbar-right'>
                        <NavLink className="login-link" to="/login">Log In</NavLink>
                        <NavLink className="signup-link" to="/signup">Sign Up</NavLink>
                       </div>
    } else {
        sessionLinks = <div className='navbar-right'>
            <ProfileButton user={currentUser} />
        </div>
    }


    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <NavLink to="/" className="home-link">hangry?<div className='icon'></div></NavLink>
            </div>
            {sessionLinks}
        </div>
    )
}

export default NavBar