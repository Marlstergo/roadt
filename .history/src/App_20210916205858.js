import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Destination from "./Pages/Destination/Destination";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Hotel from "./Pages/Hotel/Hotel";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            name="Add Review Page"
            component={Home}
          />
          <Route
            exact
            path="/about"
            name="Add Review Page"
            component={About}
          />
          <Route
            exact
            path="/hotel"
            name="Add Review Page"
            component={Hotel}
          />
          <Route
            exact
            path="/destination"
            name="Add Review Page"
            component={Destination}
          />
          <Route
            exact
            path="/blog"
            name="Add Review Page"
            component={Blog}
          />
          <Route
            exact
            path="/contact"
            name="Add Review Page"
            component={Contact}
          />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
