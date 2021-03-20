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
import Order from './components/Order/Order';

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
                                  <Route exact path="/:key">
                                    <Shop/>
                                  </Route>
                                  <Route path="/:key">
                                    <Shop/>
                                  </Route>
                                  <Route path="/:key">
                                    <Shop/>
                                  </Route>
                              </Switch>
       <Order/>
      </Router>
    </div>
  );
}

export default App;
