import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class Step2 extends Component {
  render () {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    return (
      <>
        <Row className='justify-content-center' style={{ padding: 20 }}>
          <Col md={{ span: 8 }}>
            <h1>The built-up area of your house is:</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={{ span: 12 }} style={{ padding: 10 }}>
            <select id='houseArea' style={{ width: '100%', height: 30 }}>
              <option value='less'>less than 5000 sq ft.</option>
              <option value='between'>between 5000-10000 sq ft.</option>
              <option value='more'>more than 10000 sq ft.</option>
            </select>
          </Col>
        </Row>
      </>
    )
  }
}

export default Step2
