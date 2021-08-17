import logoDark from '../../assets/shared/desktop/logo-dark.png';
import logoLight from '../../assets/shared/desktop/logo-light.png';
import logoStyles from './Logo.module.scss';

const Logo = ({logoStyle}) => {
    const logoSrc = logoStyle === 'dark' ? logoDark : logoLight;
    return(
        <div className={logoStyles.logoWrap}>
            <img src={logoSrc} alt="Designo" />
        </div>
    )
}

export default Logo
