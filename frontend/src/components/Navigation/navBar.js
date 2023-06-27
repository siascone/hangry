import { NavLink, useParams, useLocation} from 'react-router-dom';
import './navbar.css'
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useEffect, useState } from 'react';

function NavBar() {
    let [sessionLinks, setSessionLinks] = useState(<></>);
    let currentUser = useSelector(state => state.session.user);
    let {pathname} = useLocation();
    let [solid, setSolid] = useState(false);

    useEffect(() => {
        if (!currentUser && pathname === '/') {
            setSessionLinks(<div className='navbar-right'>
                <NavLink className="login-link" to="/login">Log In</NavLink>
                <NavLink className="signup-link" to="/signup">Sign Up</NavLink>
            </div>)
        } else if (!currentUser && (pathname === '/signup' || pathname === '/login')) {
            setSessionLinks(<div className='navbar-right'></div>)
        } else if (currentUser) {
            setSessionLinks(<div className='navbar-right'>
                <ProfileButton user={currentUser} />
            </div>)
        } else {
            setSessionLinks(<div className='navbar-right'>
                <NavLink className="login-link" to="/login">Log In</NavLink>
                <NavLink className="signup-link" to="/signup">Sign Up</NavLink>
            </div>)
        }

        if (pathname != '/') {
            setSolid(true)
        }
    }, [pathname, currentUser])

    return (
        <div className={`navbar ${solid ? 'solid' : 'transparent'}`}>
            <div className='navbar-left'>
                <NavLink to="/" className="home-link">hangry?<div className='icon'></div></NavLink>
            </div>
            {sessionLinks}
        </div>
    )
}

export default NavBar