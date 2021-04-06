import React from "react";
import { BrowserRouter, Router, Route} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home/home";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";
import "./styles.css";
import background from "./pages/Home/images/background.jpg";
import Footer from './components/footer'

function App() {
  return (
    <div style={{ backgroundImage: `url(${background}`, backgroundRepeat: 'repeat' }}>
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        <div>
          <NavTabs />

          <Route exact path="" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />

        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
