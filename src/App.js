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
import { createContext, useState } from 'react';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
export const userContext = createContext();

function App() {
  const [loggedUser , setLoggedUser] = useState({});
  return (
    <userContext.Provider value={[loggedUser , setLoggedUser]}>
      <Router>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <Section></Section>
                             <Switch>
                                  <Route exact path='/'>
                                    <Shop/>
                                  </Route>
                                  <PrivateRoute path="/shipment">
                                      <Shipment/>
                                  </PrivateRoute>
                                  <Route path='/login'>
                                      <Login/>
                                   </Route>
                                   <Route exact path='/placeOrder'>
                                    <PlaceOrder/>
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
    </userContext.Provider>
  );
}

export default App;
