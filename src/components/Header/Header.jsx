import HeaderStyles from './Header.module.scss';

import Container from 'react-bootstrap/Container';

import Nav from "../Nav/Nav"

const Header = () => (
    <Container>
        <header className={HeaderStyles.header}>
            <Nav />
        </header>
    </Container>
)

export default Header
