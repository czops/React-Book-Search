import React, { Component } from "react";
import { Jumbotron, Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";


class Saved extends Component {
    
    handleSubmit(event) {
        event.preventDefault()
    
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
            <Jumbotron fluid>
                <Container>
                    <h1>Here are your saved books!</h1>
                    <p>
                        Search for and Save books of interest!
            </p>


                    <Button onClick={(event) => this.handleSubmit(event)} variant="primary" type="submit" className="submitButton" block>
                        Go home to search for more books!
            </Button>

                </Container>
            </Jumbotron>


            <div className="formBox">

                {/* <Form>
            <Form.Text className="stepText">
                STEP 3.
            </Form.Text>
            <Form.Text className="sizeTitle">
                Enter the Measurements
            </Form.Text>
            {props.panels.map(panel => 
                <Form.Row className="measureBox">
                <Form.Group as={Col} controlId="formModelNumber">
                    <Form.Text className="processTitle"> PANEL {panel.panelNumber} <span className="panelNumberEnter"></span></Form.Text>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Measurement 1</Form.Label>
                            <Form.Control onChange={(event) => props.setMeasurement1(event, panel.panelNumber)} value={panel.m1} placeholder="Enter #" className="measurement1"/>
                        </Form.Group>
                        <Form.Group className="secondMeasure">
                            <Form.Label>Measurement 2</Form.Label>
                            <Form.Control onChange={(event) => props.setMeasurement2(event, panel.panelNumber)} value={panel.m2} placeholder="Enter #" className="measurement2"/>
                        </Form.Group>
                    
                    </Form.Row>
                    </Form.Group>
                    </Form.Row>
                )}
         
                <div className="buttonBox">
                    <Button variant="primary" type="submit" className="submitButton" block>
                        SUBMIT
                    </Button>
                </div>

            </Form> */}
            </div>
        </div>
    )}
}

export default Saved;