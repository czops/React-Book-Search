import React from "react";
import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function Search () {
    return (
        <div className="formBox">
            
            <Form>
            <Form.Text className="stepText">
                Search for books!
            </Form.Text>
                
                    <Form.Row>
                        <Form.Group>
                            {/* <Form.Label>Measurement 1</Form.Label>
                            <Form.Control placeholder="Enter #" className="measurement1"/>
                        </Form.Group>
                        <Form.Group className="secondMeasure">
                            <Form.Label>Measurement 2</Form.Label>
                            <Form.Control placeholder="Enter #" className="measurement2"/> */}
                        </Form.Group>
                    
                    </Form.Row>
         
                <div className="buttonBox">
                    <Button variant="primary" type="submit" className="submitButton" block>
                        SUBMIT
                    </Button>
                </div>

            </Form>
        </div>
    )
}

export default Search;