import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './css/footer.css'
import logo from './images/logo.svg'
import { Icon } from 'semantic-ui-react'

function footer () {
  return (
    <div className='foot'>
      <Container>
        <Row className='row1'>
          <img src={logo} alt='logo' />
        </Row>
        <hr style={{ border: '1px solid black' }} />
        <Row>
          <Col>
            <b>ABOUT US</b>
          </Col>
          <Col>
            <b>SITE MAP</b>
          </Col>
        </Row>
        <Row>
          <Col>
            <b>SHOP</b>
          </Col>
          <Col>
            <b>CALL US +91 9980523451</b>
          </Col>
        </Row>
        <Row>
          <Col>
            <b>STORE LOCATOR</b>
          </Col>
          <Col>
            <Icon name='facebook f' />
            <Icon name='twitter' />
            <Icon name='instagram' />
            <Icon name='pinterest' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default footer
