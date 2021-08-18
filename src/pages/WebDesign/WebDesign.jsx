import { Container } from "react-bootstrap";

import ProjectCardWrap from "../../components/ProjectCard/ProjectCardWrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import DesignRow from "../../components/DesignLinkCard/DesignRow";
import DesignLinkCard from '../../components/DesignLinkCard/DesignLinkCard';

import Express from '../../assets/web-design/desktop/image-express.jpg';
import Transfer from '../../assets/web-design/desktop/image-transfer.jpg';
import Photon from '../../assets/web-design/desktop/image-photon.jpg';
import Blogr from '../../assets/web-design/desktop/image-blogr.jpg';
import Builder from '../../assets/web-design/desktop/image-builder.jpg';
import Camp from '../../assets/web-design/desktop/image-camp.jpg';

const WebDesign = () => {
    return (
        <Container>
            <div>
                <h1>Web Design</h1>
                <section>
                    <ProjectCardWrap>
                        <ProjectCard 
                            title="Express"
                            description="A multi-carrier shipping website for ecommerce businesses"
                            imgUrl={Express}
                        />
                        <ProjectCard 
                            title="Transfer"
                            description="Site for low-cost money transfers and sending money within seconds"
                            imgUrl={Transfer}
                        />
                        <ProjectCard 
                            title="Photon"
                            description="A state-of-the-art music player with high-resolution audio and DSP effects"
                            imgUrl={Photon}
                        />
                        <ProjectCard 
                            title="Builder"
                            description="Connects users with local contractors based on their location"
                            imgUrl={Builder}
                        />
                        <ProjectCard 
                            title="Blogr"
                            description="Blogr is a platform for creating an online blog or publication"
                            imgUrl={Blogr}
                        />
                        <ProjectCard 
                            title="Camp"
                            description="Get expert training in coding, data, design, and digital marketing"
                            imgUrl={Camp}
                        />
                    </ProjectCardWrap>
                </section>

                <section>
                    <DesignRow page="web-page">
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
                    </DesignRow>
                </section>
            </div>
        </Container>
    )
}

export default WebDesign
