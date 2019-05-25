import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function SearchStuff () {
    return (
        <div className="formBox">
            
            <Form>
            {/* <Form.Text className="stepText">
                Search for books!
            </Form.Text> */}
                
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Search for a Book</Form.Label>
                            <Form.Control placeholder="Enter a book title" className="measurement1"/>
                        </Form.Group>
                    
                    </Form.Row>
         
                <div className="buttonBox">
                    <Button variant="primary" type="submit" className="submitButton" block>
                        Submit
                    </Button>
                </div>

            </Form>
        </div>
    )
}

export default SearchStuff;