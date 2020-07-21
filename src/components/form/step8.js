import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

class Step8 extends Component {
  render () {
    if (this.props.currentStep !== 8) {
      return null
    }
    return (
      <>
        <Container>
          <Col md={{ span: 5 }}>
            <Row><h1>15 Swatches at 595</h1></Row>
          </Col>
        </Container>

        <Container>
          <Col style={{ padding: 20 }}>
            <Row style={{ backgroundColor: 'grey', height: '50px' }}>
              <div className='col-md-12' style={{ backgroundColor: 'grey' }}>
                <h4 style={{ backgroundColor: 'grey' }}>Shipping and Billing</h4>
              </div>
            </Row>
          </Col>
        </Container>

        <Container>
          <Col>
            <Row style={{ padding: 20 }}>
              <Col md={{ span: 5, offset: 1 }}>
                <div className='an-option1'>
                  <input className='optionOne' style={{ border: 'none' }} type='text' id='fname' name='fname' placeholder='First Name' />
                </div>
              </Col>

              <Col md={{ span: 5, offset: 1 }}>
                <div className='an-option1'>
                  <input className='optionOne' style={{ border: 'none' }} type='text' id='lname' name='lname' placeholder='Last Name' />
                </div>
              </Col>
            </Row>

            <Row style={{ padding: 20 }}>
              <Col md={{ span: 11, offset: 1 }}>
                <div className='an-option1'>
                  <input className='optionOne' style={{ border: 'none' }} type='text' id='ad1' name='address1' placeholder='Address1' />
                </div>
              </Col>
            </Row>

            <Row style={{ padding: 20 }}>
              <Col md={{ span: 11, offset: 1 }}>
                <div className='an-option1'>
                  <input className='optionOne' style={{ border: 'none' }} type='text' id='ad2' name='address2' placeholder='Address2' />
                </div>
              </Col>
            </Row>

            <Row style={{ padding: 20 }}>
              <Col md={{ span: 5, offset: 1 }}>
                <div className='an-option1'>
                  <input className='optionOne' style={{ border: 'none' }} type='text' id='city' name='city' placeholder='Town/City' />
                </div>
              </Col>

              <Col md={{ span: 5, offset: 1 }}>
                <div className='an-option1'>
                  <input className='optionOne' style={{ border: 'none' }} type='text' id='state' name='state' placeholder='state' />
                </div>
              </Col>
            </Row>

            <Row style={{ padding: 20 }}>
              <Col md={{ span: 5, offset: 1 }}>
                <div className='an-option1'>
                  <input className='optionOne' style={{ border: 'none' }} type='text' id='zip' name='zip' placeholder='ZIP Code' />
                </div>
              </Col>

              <Col md={{ span: 5, offset: 1 }}>
                <div className='an-option1'>
                  <input className='optionOne' style={{ border: 'none' }} type='text' id='phone' name='phone' placeholder='Phone Number' />
                </div>
              </Col>
            </Row>

            <Row style={{ padding: 5 }}>
              <input style={{ display: 'block' }} type='checkbox' id='terms' />
              <label for='terms'>
                <div>My delivery and billing address are the same</div>
              </label>
            </Row>
          </Col>
        </Container>

        <Container>
          <Col style={{ padding: 20 }}>
            <Row style={{ backgroundColor: 'grey', height: '50px' }}>
              <div className='col-md-12' style={{ backgroundColor: 'grey' }}>
                <h4 style={{ backgroundColor: 'grey' }}>Review and Place order</h4>
              </div>
            </Row>
          </Col>
        </Container>

        <Container>
          <Row className='an-option' style={{ border: '1px solid black' }}>
            <Col md={{ span: 4 }}>Sub Total - 15 Swatches</Col>
            <Col md={{ span: 4, offset: 4 }}>₹ 595</Col>
          </Row>
          <Row className='an-option' style={{ border: '1px solid black' }}>
            <Col md={{ span: 4 }}>Shipping</Col>
            <Col md={{ span: 4, offset: 4 }}>₹ 0</Col>
          </Row>
          <Row className='an-option' style={{ border: '1px solid black' }}>
            <Col md={{ span: 4 }}>Taxes</Col>
            <Col md={{ span: 4, offset: 4 }}>₹ 0</Col>
          </Row>
          <Row className='an-option' style={{ border: '1px solid black' }}>
            <Col md={{ span: 4 }}>Total</Col>
            <Col md={{ span: 4, offset: 4 }}>₹ 595</Col>
          </Row>
          <Row style={{ padding: 5 }}>
            <input style={{ display: 'block' }} type='checkbox' id='terms' />
            <label for='terms'>
              <div>I have read and agree to the <b>Terms and Conditions</b></div>
            </label>
          </Row>
        </Container>
      </>
    )
  }
}

export default Step8
