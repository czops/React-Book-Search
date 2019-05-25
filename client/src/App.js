import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Jumbotron, Col, Row, Container } from "react-bootstrap";

import Home from "./components/pages/home/Home";
// import SavedComponent from "./components/saved/Saved";
// import SearchComponent from "./components/search/Search";

// import Search from "./src/components/search";
import Saved from "./components/saved/Saved";

// import "./App.css";

class App extends Component {
  
  state = {
    title: ""
  }
  
  // render() {
  //   return (
  //     <div className="App">

  //       <Home/>
  
  //     </div>



  //   );
  // }



  render() {
    return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Saved" component ={Saved} />
          
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }


}

export default App;
