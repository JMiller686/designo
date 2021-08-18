import NavStyles from './Nav.module.scss';

import { Link } from 'react-router-dom';

const Nav = () => (
    <nav className={NavStyles.nav}>
        <ul className={`text-uppercase ${NavStyles.navLinks}`}>
            <li>
                <Link to="/our-company">Our Company</Link>
            </li>
            <li>
                <Link to="/locations">Locations</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
)

export default Nav
