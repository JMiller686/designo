import NavStyles from './Nav.module.scss';
import logo from '../../assets/shared/desktop/logo-dark.png';

const Nav = () => (
    <nav className={NavStyles.nav}>
        <div className={NavStyles.logoWrap}>
            <img src={logo} alt="Designo" />
        </div>
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
