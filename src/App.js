import Landing from './Landing';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomSwitch from "./Components/CustomSwitch.js";
import Login from './Signin';
import Signup from './Signup';
import Checkout from './Checkout';
import About from './About';
import Service from './Service';
import Form from './Form'
import Contact from './Contact';
import ProtectedRoute from "./Components/ProtectedRoute.js";
import NavBar from './Components/NavBar/NavBar';
import FormData from './FormData';
             
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
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
              <Route exact path = '/multi'>
                <FormData />
              </Route>
              <Route exact path = '/service'>
                <Service/>
              </Route>
              <ProtectedRoute
                path="/checkout"
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
