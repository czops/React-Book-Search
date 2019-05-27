import React, { Component } from "react";
import { Jumbotron, Col, Row, Container } from "react-bootstrap";

import SearchComponent from "../../search/SearchStuff";
import DisplayComponent from "../../display/Display";
import NavbarComponent from "../../navbar/Navbar";
import Button from "react-bootstrap/Button";


// import Search from "./src/components/search";
// import Saved from "./src/components/saved";
// import "./App.css";

class Home extends Component {

  state = {
    books: []
  }

  handleSubmit(event) {
    event.preventDefault();
    this.push('/Saved');
    // console.log(this.props);
    // console.log(this.props.history);

    // API.BooksSearch(Panels)
    //   .then((res) => {
    //     console.log(res)
    //     if (res.status === 200) {
    //       this.props.history.push('/Saved');
    //     }
    // })
  }

  render() {
    return (
      <div className="Home">
        <NavbarComponent/>  
        <Jumbotron fluid>
          <Container>
            <h1>(React) Google Book Search!</h1>
            <p>
              Search for and Save books of interest!
            </p>

{/* 
            <Button onClick={(event) => this.handleSubmit(event)} variant="primary" type="submit" className="submitButton" block>
              Go to your saved books!
            </Button> */}

          </Container>
        </Jumbotron>

        <Container>
          <Row>
            <Col>
              <SearchComponent />
              <DisplayComponent />
            </Col>
          </Row>
        </Container>
      </div>




    );
  }

}

export default Home;
