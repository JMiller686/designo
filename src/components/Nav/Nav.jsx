import NavStyles from './Nav.module.scss';

const Nav = () => (
    <nav className={NavStyles.nav}>
        <ul className={`text-uppercase ${NavStyles.navLinks}`}>
            <li>
                <a href="#">Our Company</a>
            </li>
            <li>
                <a href="#">Locations</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
)

export default Nav
