import { Container } from "react-bootstrap";

import ProjectCardWrap from "../../components/ProjectCard/ProjectCardWrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
            </div>
        </Container>
    )
}

export default GraphicDesign
