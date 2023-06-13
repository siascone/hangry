import './splash.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function Splash() {
    return (
        <div className="splash-main">
            <NavLink to="/businesses" className='businesses-link'>Businesses</NavLink>
            {/* <p>More coming soon but user auth works!</p> */}
        </div>
    )
}

export default Splash