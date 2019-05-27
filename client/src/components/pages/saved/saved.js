import React, { Component } from "react";
import { Jumbotron, Col, Row, Container, Button } from "react-bootstrap";
import NavbarComponent from "../../navbar/Navbar";


// import API from "../utils/API";
import DeleteBtn from "../../deleteButton";
import { List, ListItem } from "../../list";
// import { Input, TextArea, FormBtn } from "../components/Form";


class Saved extends Component {
    

    
    handleSubmit(event) {
        event.preventDefault();
        this.push('/');
    
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
    
    
    render(){

    
    return (

        <div>
            <NavbarComponent/>
            <Jumbotron fluid>
                <Container>
                    <h1>Here are your saved books!</h1>
                </Container>
            </Jumbotron>

            <Container fluid>
        <Row>
          
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </Col>
        </Row>
      </Container>


        </div>
    )}
}

export default Saved;