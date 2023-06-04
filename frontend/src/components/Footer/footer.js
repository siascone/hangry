import './footer.css'

function Footer() {
    return (
        <div className='footer-main'>
            <div className='footer-links'>
                <div className='footer-about'>
                    <h2>About the Developer</h2>
                    <ul>
                        <a href='https://github.com/siascone' target="_blank" rel="noreferrer"><li>GitHub</li></a>
                        <a href='https://www.linkedin.com/in/spencer-iascone-56b28b62/' target="_blank" rel="noreferrer"><li>LinkedIn</li></a>
                        <a href='mailto:spencer.iascone@gmail.com' target="_blank" rel="noreferrer"><li>spencer.iascone@gmail.com</li></a>
                    </ul>
                </div>
                <div className='footer-technologies'>
                    <h2>Technologies Used</h2>
                    <ul>
                        <a href='https://rubyonrails.org/' target="_blank" rel="noreferrer"><li>Ruby on Rails</li></a>
                        <a href='https://www.postgresql.org/' target="_blank" rel="noreferrer"><li>PostgreSQL</li></a>
                        <a href='https://react.dev/' target="_blank" rel="noreferrer"><li>React</li></a>
                        <a href='https://redux.js.org/' target="_blank" rel="noreferrer"><li>Redux</li></a>
                    </ul>
                </div>
                <div className='footer-references'>
                    <h2>References</h2>
                    <ul>
                        <a href='https://www.yelp.com/' target="_blank" rel="noreferrer"><li>Yelp</li></a>
                    </ul>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>Copyright <span>&#169;</span> 2023 Spencer Iascone</p>
            </div>
        </div>
    )
}

export default Footer