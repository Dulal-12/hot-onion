import './App.css';
import Bannar from './components/Bannar/Bannar';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
function App() {
  return (
    <div>
      <Router>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <Section></Section>
                             <Switch>
                                  <Route exact path='/'>
                                    <Shop/>
                                  </Route>
                                  <Route exact path="/login">
                                      <Login/>
                                  </Route>
                                  <Route path="/food/:id">
                                    <ProductDetail/>
                                  </Route>
                                  <Route  path="/:key">
                                    <Shop/>
                                  </Route>
                                  <Route path="/:key">
                                    <Shop/>
                                  </Route>
                                  <Route path="/:key">
                                    <Shop/>
                                  </Route>
                                 
                                
                              </Switch>
                             
                             
                              <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
