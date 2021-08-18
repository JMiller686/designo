import { Container } from "react-bootstrap";
import DesignGridHome from "../../components/DesignLinkCard/DesignGridHome";


const Home = () => {
    return (
        <Container>
            <div>
                <h1>Home</h1>

                <section>
                    <DesignGridHome />
                </section>
                
            </div>
        </Container>
        
    )
}

export default Home
