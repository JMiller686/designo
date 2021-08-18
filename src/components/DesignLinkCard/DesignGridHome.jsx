import './DesignGrid.scss';

import DesignLinkCard from "./DesignLinkCard";

const DesignGridHome = () => {
    return (
        <div className='design-grid-home'>
            <DesignLinkCard
                cardName='web'
                title="Web Design"
                linkUrl="/web-design"
                size="large"
            />
            <DesignLinkCard
                cardName='app'
                title="App Design"
                linkUrl="/app-design"
                size="small"
            />
            <DesignLinkCard 
                cardName='graphic'
                title="Graphic Design"
                linkUrl="/graphic-design"
                size="small"
            />
        </div>
    )
}

export default DesignGridHome
