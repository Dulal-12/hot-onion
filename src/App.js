import './App.css';
import Bannar from './components/Bannar/Bannar';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Products from './components/Products/Products';
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
           <Products></Products>
        </Route>
          <Route exact path="/:key">
            <Products></Products>
          </Route>
          <Route path="/:key">
            <Products></Products>
          </Route>
          <Route path="/:key">
            <Products></Products>
          </Route>
        </Switch>
        <Order></Order>
      </Router>
    </div>
  );
}

export default App;
