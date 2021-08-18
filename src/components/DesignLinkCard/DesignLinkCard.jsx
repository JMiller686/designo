import { Link } from 'react-router-dom';
import './DesignLinkCard.scss';

import {ReactComponent as ArrowRight} from '../../assets/shared/desktop/icon-right-arrow.svg';

const DesignLinkCardSmall = ({linkUrl, title, size, cardName}) => {
    return (
        <Link to={linkUrl} className={`design-card ${size} ${cardName}`}>
            <div className="design-card-content">
                <h2>{title}</h2>
                <span>view projects <ArrowRight className="arrow"/></span>
            </div>
        </Link>
        
    )
}

export default DesignLinkCardSmall
