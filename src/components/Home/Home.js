import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('https://volunteer-network-server-site.herokuapp.com/events')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    }, [])

    return (
        <Container>
            <Row>
                {
                    events.map(event => <Event key={event._id} event={event} />)
                }
            </Row>
        </Container>
    );
};

export default Home;