import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export default class Home extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className='text-center'>1 of 2</Col>
                    <Col className='text-center'>2 of 2</Col>
                </Row>
                <Row>
                    <Col className='text-center'>1 of 3</Col>
                    <Col className='text-center'>2 of 3</Col>
                    <Col className='text-center'>3 of 3</Col>
                </Row>
          </Container>
        )
    }
}
