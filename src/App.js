import Landing from './Landing';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomSwitch from "./Components/CustomSwitch.js";
import Login from './Signin';
import Signup from './Signup';
import Checkout from './Checkout';
import About from './About';
import Services from './Services';
import Form from './Form'
import Contact from './Contact';
import ProtectedRoute from "./Components/ProtectedRoute.js";
import FormData from './FormData';
import ServiceDetails from './ServiceDetails';
             
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className = 'content' basename="/React">
          <CustomSwitch>
            <Switch>
              <Route exact path = '/'>
                <Landing />
              </Route>
              <Route exact path = '/signup'>
                <Signup/>
              </Route>
              <Route exact path = '/signin'>
                <Login/>
              </Route>
              <Route exact path = '/about'>
                <About/>
              </Route>
              <Route exact path = '/contact'>
                <Contact/>
              </Route>
              <Route exact path = '/form'>
                <Form />
                </Route>
              <Route exact path = '/data'>
                <FormData />
              </Route>
              <Route exact path = '/service'>
                <Services />
              </Route>
              <Route exact path='/service/:serviceId'>
                <ServiceDetails />
              </Route>
              <ProtectedRoute
               exact path="/checkout"
                component={Checkout}
              />
            </Switch>
          </CustomSwitch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
