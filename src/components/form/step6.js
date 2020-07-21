import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class Step6 extends Component {
  render () {
    if (this.props.currentStep !== 6) { // Prop: The current step
      return null
    }
    return (
      <>
        <Row className='justify-content-center' style={{ padding: 20 }}>
          <Col md={{ span: 8 }}>
            <h1>It's the little details that are vital:</h1>
          </Col>
        </Row>

        <Row className='justify-content-center' style={{ padding: 20 }}>
          <Col md={{ span: 12 }}>
            <h1>We'd like to understand your price philosophy.</h1>
          </Col>
          <Col md={{ span: 12 }} style={{ padding: 10 }}>
            <select id='houseArea' style={{ width: '100%', height: 30 }}>
              <option value='less'>Choose One</option>
              <option value='between' selected='selected'>Price is not a consideration at this Stage</option>
              <option value='more'>Only send me fabric styles under 3000 INR per month</option>
            </select>
          </Col>
        </Row>

        <Row style={{ padding: 20 }}>
          <Col md={{ span: 12 }}>
            <h1>Anything else you'd like to tell us about this room?</h1>
          </Col>
          <Col md={{ span: 12 }}>
            <textarea rows='8' style={{ width: '100%' }} />
          </Col>
        </Row>

        <Row style={{ padding: 20 }}>
          <Col md={{ span: 12 }}>
            <h1>Would you like to upload a picture of your room?</h1>
          </Col>
          <Col md={{ span: 12, border: '1px solid black' }}>
            <input type='file' id='myfile' name='myfile' />
          </Col>
        </Row>
      </>
    )
  }
}

export default Step6
