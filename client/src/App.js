import React, { Component } from "react";
// import { Jumbotron, Col, Row, Container } from "react-bootstrap";

import Home from "./components/pages/home/Home";
// import SavedComponent from "./components/saved/Saved";
// import SearchComponent from "./components/search/Search";

// import Search from "./src/components/search";
// import Saved from "./src/components/saved";

// import "./App.css";

class App extends Component {
  
  state = {
    title: ""
  }
  
  render() {
    return (
      <div className="App">

        <Home/>
  
      </div>



    );
  }

  //Don't really think router is necessary for this application

  // render() {
  //   return (

  //     <Router>
  //       <div>
  //         <Switch>
  //           <Route exact path="/" component={Login} />
  //           {/* <Route exact path="/LandingPage" render={(state) => <LandingPage {...state}/>} /> */}
  //           <Route exact path="/Landing" render={(state) => <Landing 
  //           masterState={this.state} 
  //           setMasterState={this.setMasterState} 
  //           setPanelNumber={this.setPanelNumber} 
  //           setModelNumber={this.setModelNumber} 
  //           setShopOrderNumber={this.setShopOrderNumber} 
  //           setZone={this.setZone} 
  //           setSize={this.setSize}
  //           setMeasurement1={this.setMeasurement1} 
  //           setMeasurement2={this.setMeasurement2}
  //           />} />

  //           <Route exact path="/Process" component={Process} />
  //           <Route exact path="/Measurements" render={(state) => <Measurements masterState={this.state} setMasterState={this.setMasterState} />} />
  //           <Route exact path="/Process1" render={(state) => <Process1 masterState={this.state} setMasterState={this.setMasterState} process1CheckState={this.process1CheckState} handleInputChange={this.handleInputChange} PUTsomeStuff={this.PUTsomeStuff} />} />
  //           <Route exact path="/Process2" render={(state) => <Process2 masterState={this.state} setMasterState={this.setMasterState} />} />
  //           <Route exact path="/Success" component={Success} />
  //           {/* Create route from api to pull all panels, for T&E */}
  //           <Route component={NotFound} />
  //         </Switch>
  //       </div>
  //     </Router>
  //   );
  // }


}

export default App;
