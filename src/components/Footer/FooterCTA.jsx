import FooterCTAStyles from './FooterCTA.module.scss';

import Button from '../Button/Button';

const FooterCTA = () => (
    <div className={FooterCTAStyles.footerCTA}>
        <div className={FooterCTAStyles.left}>
            <h2>Let’s talk about your project</h2>
            <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        </div>
        <div className={FooterCTAStyles.right}>
            <Button linkUrl="https://google.com" btnLight={true}>Get in touch</Button>
        </div>
    </div>
)

export default FooterCTA
