import NavBar from "./components/Navigation/navBar";
import { Route, Switch } from "react-router-dom";
import Splash from "./components/Splash/splash";
import SignupForm from "./components/SignupForm/SignupForm";
import LoginForm from "./components/LoginForm/LoginForm";
import Footer from "./components/Footer/footer";
import BusinessIndex from "./components/Businesses/businessIndex";
import BusinessShow from "./components/Businesses/businessShow";

function App() {
  return (
    <div>
      <NavBar />

      <Switch>
        <Route path='/signup' component={SignupForm} />
        <Route path='/login' component={LoginForm} />
        <Route exact path='/businesses/:businessId' component={BusinessShow}/>
        <Route path='/businesses' component={BusinessIndex} />
        <Route exact path='/' component={Splash} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
