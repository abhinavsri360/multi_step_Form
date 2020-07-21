import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Step7 extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    if (this.props.currentStep !== 7) {
      return null
    }
    return (
      <div className='form-group'>

        <Row className='justify-content-center' style={{ padding: 20 }}>
          <Col md={{ span: 4 }}>
            <h2>Almost there!</h2>
          </Col>
        </Row>

        <Row className='justify-content-center' style={{ padding: 20 }}>
          <Col md={{ span: 7 }}>
            <h1>Please enter your email to continue</h1>
          </Col>
        </Row>

        <Container>
          <Col md={{ span: 12 }} className='an-option1'>
            <input type='email' required style={{ width: '100%', border: 'none' }} placeholder='Email' />
          </Col>
        </Container>

        <Container>
          <Col md={{ span: 8 }}>
            <p>Your privacy is important to us. Please check our Terms & Conditions</p>
          </Col>
        </Container>

      </div>
    )
  }
}

export default Step7
