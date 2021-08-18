import './App.scss';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Switch, 
  Route
} from 'react-router-dom'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import AppDesign from './pages/AppDesign/AppDesign';
import GraphicDesign from './pages/GraphicDesign/GraphicDesign';
import WebDesign from './pages/WebDesign/WebDesign';
import OurCompany from './pages/OurCompany/OurCompany';
import Locations from './pages/Locations/Locations';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/our-company" component={OurCompany} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/app-design" component={AppDesign} />
          <Route path="/graphic-design" component={GraphicDesign} />
          <Route path="/web-design" component={WebDesign} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
