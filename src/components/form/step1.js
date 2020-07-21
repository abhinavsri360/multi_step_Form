import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import box from '../images/box.jpg'
import './css/step1.css'

class Step1 extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
    this.change1 = this.change1.bind(this)
    this.change2 = this.change2.bind(this)
    this.change3 = this.change3.bind(this)
    this.change4 = this.change4.bind(this)
  }

  change1 () {
    document.getElementsByClassName('an-option1')[0].style.backgroundColor = 'grey'
    document.getElementsByClassName('an-option2')[0].style.backgroundColor = 'white'
    document.getElementsByClassName('an-option3')[0].style.backgroundColor = 'white'
  }

  change2 () {
    document.getElementsByClassName('an-option1')[0].style.backgroundColor = 'white'
    document.getElementsByClassName('an-option2')[0].style.backgroundColor = 'grey'
    document.getElementsByClassName('an-option3')[0].style.backgroundColor = 'white'
  }

  change3 () {
    document.getElementsByClassName('an-option1')[0].style.backgroundColor = 'white'
    document.getElementsByClassName('an-option2')[0].style.backgroundColor = 'white'
    document.getElementsByClassName('an-option3')[0].style.backgroundColor = 'grey'
  }

  change4 () {
    document.getElementsByClassName('an-option1')[0].style.backgroundColor = 'white'
    document.getElementsByClassName('an-option2')[0].style.backgroundColor = 'white'
    document.getElementsByClassName('an-option3')[0].style.backgroundColor = 'white'
  }

  render () {
    if (this.props.currentStep !== 1) {
      return null
    }
    return (
      <div className='form-group'>
        <Container style={{ padding: 20 }}>
          <Row className='justify-content-center'>
            <div className='col-lg-4'>
              <img src={box} alt='swatchbox' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            <div className='col-lg-5'>
              <h3>Easy Styling - Start a Swatch Box</h3>
              <p>Your first Swatch Box is a chance for us to get to know each other better. Since you know your home and we know our collection, let's work together to create a few handpicked looks that you'll love</p>
              <b>Ready to go?</b>
            </div>
          </Row>
        </Container>
        <Container>
          <hr style={{ borderTop: '1px dashed black' }} />
        </Container>

        <Row className='justify-content-center' style={{ padding: 20 }}>
          <Col md={{ span: 4 }}>
            <h1>Let's start selecting</h1>
            <h3><b>Your home is best described as</b></h3>
          </Col>
        </Row>

        <Container>
          <Col>
            <Row style={{ padding: 10 }}>
              <Col md={{ span: 5, offset: 1 }}>
                <div className='an-option1' onClick={this.change1}>
                  <input className='optionOne' type='radio' id='modern' name='hometype' value='Modern/contemporary' />
                  <label id='first' for='modern'>
                    <div>MODERN / CONTEMPORARY</div>
                  </label>
                </div>
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <div className='an-option2' onClick={this.change2}>
                  <input className='optionTwo' type='radio' id='Classic' name='hometype' value='Classic' />
                  <label id='second' for='Classic'>
                    <div>CLASSIC</div>
                  </label>
                </div>
              </Col>
            </Row>
            <Row style={{ padding: 10 }}>
              <Col md={{ span: 5, offset: 1 }}>
                <div className='an-option3' onClick={this.change3}>
                  <input className='optionThree' type='radio' id='Electric' name='hometype' value='Electric/Experimental' />
                  <label id='third' for='Electric'>
                    <div>ELECTRIC / EXPERIMENTAL</div>
                  </label>
                </div>
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <div className='an-option4' onClick={this.change4}>
                  <input style={{ border: 'none' }} className='optionFour' type='text' id='other' name='hometype' placeholder='OTHERS(PLEASE SPECIFY)' onChange={this.change4} />
                  <label id='fourth' for='other' />
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    )
  }
}

export default Step1
