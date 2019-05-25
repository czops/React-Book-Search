import React, { Component } from "react";
import { Jumbotron, Col, Row, Container } from "react-bootstrap";

// import SearchComponent from "../..search/Search";
import DisplayComponent from "../../display/Display";


// import Search from "./src/components/search";
// import Saved from "./src/components/saved";
// import "./App.css";

class Home extends Component {
  render() {
    return (
      <div className="App">

        <Jumbotron fluid>
          <Container>
            <h1>(React) Google Book Search!</h1>
            <p>
              Search for and Save books of interest!
            </p>
          </Container>
        </Jumbotron>

        <Container>
          <Row>
            <Col>
              {/* <SearchComponent /> */}
              <DisplayComponent />
            </Col>
          </Row>
        </Container>
      </div>




    );
  }

}

export default Home;
