import { Link } from 'react-router-dom';
import logoDark from '../../assets/shared/desktop/logo-dark.png';
import logoLight from '../../assets/shared/desktop/logo-light.png';
import logoStyles from './Logo.module.scss';


const Logo = ({logoStyle}) => {
    const logoSrc = logoStyle === 'dark' ? logoDark : logoLight;
    return(
        <div className={logoStyles.logoWrap}>
            <Link to="/">
                <img src={logoSrc} alt="Designo" />
            </Link>
        </div>
    )
}

export default Logo
