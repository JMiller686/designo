import { Container } from "react-bootstrap";

import ProjectCardWrap from "../../components/ProjectCard/ProjectCardWrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import AirFilter from '../../assets/app-design/desktop/image-airfilter.jpg';
import EyeCam from '../../assets/app-design/desktop/image-eyecam.jpg';
import FaceIt from '../../assets/app-design/desktop/image-faceit.jpg';
import Todo from '../../assets/app-design/desktop/image-todo.jpg';
import LoopStudios from '../../assets/app-design/desktop/image-loopstudios.jpg';

const AppDesign = () => (
    <Container>
        <div>
            <h1>App Design</h1>
            <section>
                <ProjectCardWrap>
                    <ProjectCard 
                        title="Airfilter"
                        description="Solving the problem of poor indoor air quality by filtering the air"
                        imgUrl={AirFilter}
                        altText="Airfilter"
                    />
                    <ProjectCard 
                        title="Eyecam"
                        description="Product that lets you edit your favorite photos and videos at any time"
                        imgUrl={EyeCam}
                        altText="Eyecam"
                    />
                    <ProjectCard 
                        title="Faceit"
                        description="Get to meet your favorite internet superstar with the faceit app"
                        imgUrl={FaceIt}
                        altText="Faceit"
                    />
                    <ProjectCard 
                        title="Todo"
                        description="A todo app that features cloud sync with light and dark mode"
                        imgUrl={Todo}
                        altText="Todo"
                    />
                    <ProjectCard 
                        title="LoopStudios"
                        description="A VR experience app made for Loopstudios"
                        imgUrl={LoopStudios}
                        altText="LoopStudios"
                    />
                </ProjectCardWrap>
            </section>
        </div>
    </Container>
)

export default AppDesign
