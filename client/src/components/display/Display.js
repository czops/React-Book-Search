import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Display() {
    return (
        

<div className="positionBox">
        <br></br>
            <Card className="mainCard">
                
   {/* map function here */}
                
                <Card.Title className="cardTitle"> Data Entered Successfully!</Card.Title>
                
                <Card.Body className="cardMessage"> Books! </Card.Body>
                <Button variant="primary" type="submit" className="homeButton float-right"> Save this book! </Button>


            </Card>
       
        </div>
    )
}

export default Display;