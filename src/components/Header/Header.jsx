import HeaderStyles from './Header.module.scss';


import Container from 'react-bootstrap/Container';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

const Header = () => (
    <Container>
        <header className={HeaderStyles.header}>
            <Logo logoStyle='dark'/>
            <Nav />
        </header>
    </Container>
)

export default Header
