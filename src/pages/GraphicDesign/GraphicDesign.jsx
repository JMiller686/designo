import { Container } from "react-bootstrap";

import ProjectCardWrap from "../../components/ProjectCard/ProjectCardWrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import DesignRow from "../../components/DesignLinkCard/DesignRow";
import DesignLinkCard from '../../components/DesignLinkCard/DesignLinkCard';

import TimBrown from '../../assets/graphic-design/desktop/image-change.jpg';
import BoxedWater from '../../assets/graphic-design/desktop/image-boxed-water.jpg';
import Science from '../../assets/graphic-design/desktop/image-science.jpg';

const GraphicDesign = () => {
    return (
        <Container>
            <div>
                <h1>Graphic Design</h1>
                <section>
                    <ProjectCardWrap>
                        <ProjectCard 
                            title="Tim Brown"
                            description="A book cover designed for Tim Brown’s new release, ‘Change’"
                            imgUrl={TimBrown}
                        />
                        <ProjectCard 
                            title="Boxed water"
                            description="A simple packaging concept made for Boxed Water"
                            imgUrl={BoxedWater}
                        />
                        <ProjectCard 
                            title="Science!"
                            description="A poster made in collaboration with the Federal Art Project"
                            imgUrl={Science}
                        />
                    </ProjectCardWrap>
                </section>

                <section>
                    <DesignRow page="graphic-page">
                        <DesignLinkCard
                            cardName='app'
                            title="App Design"
                            linkUrl="/app-design"
                            size="small"
                        />
                        <DesignLinkCard
                            cardName='web'
                            title="Web Design"
                            linkUrl="/web-design"
                            size="small"
                        />
                    </DesignRow>
                </section>
            </div>
        </Container>
    )
}

export default GraphicDesign
