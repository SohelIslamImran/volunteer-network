import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Event = (props) => {
    const { name, imageURL } = props.event

    return (
        <Col md="3">
            <Card
                text='white'
                className="mb-4"
                border="0"
                style={{
                width: '16rem',
                background: "#3F90FC",
                borderRadius: "10px"
            }} >
                <Card.Img variant="top" src={imageURL} />
                <Card.Body style={{height: '5rem'}}>
                    <Card.Title className="text-center">{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;