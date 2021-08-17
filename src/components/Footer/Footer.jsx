import FooterStyles from './Footer.module.scss';

import {Container, Row, Col} from 'react-bootstrap';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import FooterCTA from './FooterCTA';

import { ReactComponent as Facebook } from '../../assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as Youtube } from '../../assets/shared/desktop/icon-youtube.svg';
import { ReactComponent as Instagram } from '../../assets/shared/desktop/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../assets/shared/desktop/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/shared/desktop/icon-pinterest.svg';


const Footer = () => (
    <footer>
        <Container>
            <FooterCTA/>

            <div className={FooterStyles.footerTop}>
                <Logo logoStyle='light'/>
                <div className={FooterStyles.mobileSplit}></div>
                <Nav /> 
            </div>

            <div className={FooterStyles.footerBottom}>
                <Row>
                    <Col sm={12} md={4}>
                        <address className={FooterStyles.location}>
                            <span className="bold">Designo Central Office</span>
                            <span>3886 Wellington Street</span>
                            <span>Toronto, Ontario M9C 3J5</span>
                        </address>
                    </Col>
                    <Col sm={12} md={4}>
                        <address className={FooterStyles.contactInfo}>
                            <span>Contact Us (Central Office)</span>
                            <span>P : <a href="tel:+1 253-863-8967">+1 253-863-8967</a></span>
                            <span>M : <a href="mailto:contact@designo.co">contact@designo.co</a></span>
                        </address>
                    </Col>
                    <Col sm={12} md={4} className={FooterStyles.socialIconWrap}>
                        <div className={FooterStyles.socialIcons}>
                            <Facebook className={FooterStyles.icon}/>
                            <Youtube className={FooterStyles.icon} />
                            <Twitter className={FooterStyles.icon} />
                            <Pinterest className={FooterStyles.icon} />
                            <Instagram className={FooterStyles.icon} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </footer>
)

export default Footer
