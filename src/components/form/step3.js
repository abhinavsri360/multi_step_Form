import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './css/step3.css'

class Step3 extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
    this.change = this.change.bind(this)
  }

  change (classname, room) {
    if (document.getElementsByClassName(classname)[0].style.backgroundColor === 'grey') {
      document.getElementsByClassName(classname)[0].style.backgroundColor = 'white'
      document.getElementsByClassName(room)[0].style.display = 'none'
    } else {
      document.getElementsByClassName(classname)[0].style.backgroundColor = 'grey'
      document.getElementsByClassName(room)[0].style.display = 'block'
    }
  }

  render () {
    if (this.props.currentStep !== 3) {
      return null
    }
    return (
      <div className='form-group'>
        <Row className='justify-content-center' style={{ padding: 20 }}>
          <Col md={{ span: 6 }}>
            <h1>What room are you shopping for?</h1>
            <h3><b>(You can select more than one)</b></h3>
          </Col>
        </Row>

        <Container>
          <Col>
            <Row style={{ padding: 10 }}>
              <Col md={{ span: 3, offset: 1 }}>
                <div className='an-option1' onClick={() => this.change('an-option1', 'room1')}>
                  <input className='optionOne' type='checkbox' id='living' name='roomtype' value='Living room' />
                  <label id='first' for='living'>
                    <div>LIVING ROOM</div>
                  </label>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 1 }}>
                <div className='an-option2' onClick={() => this.change('an-option2', 'room2')}>
                  <input className='optionTwo' type='checkbox' id='master' name='roomtype' value='master' />
                  <label id='second' for='master'>
                    <div>MASTER BEDROOM</div>
                  </label>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 1 }}>
                <div className='an-option3' onClick={() => this.change('an-option3', 'room3')}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label id='third' for='children'>
                    <div>CHILDREN'S BEDROOM</div>
                  </label>
                </div>
              </Col>
            </Row>
            <Row style={{ padding: 10 }}>
              <Col md={{ span: 3, offset: 1 }}>
                <div className='an-option4' onClick={() => this.change('an-option4', 'room4')}>
                  <input className='optionFour' type='checkbox' id='guest' name='roomtype' value='guest' />
                  <label id='fourth' for='guest'>
                    <div>GUESTROOM</div>
                  </label>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 1 }}>
                <div className='an-option5' onClick={() => this.change('an-option5', 'room5')}>
                  <input className='optionFive' type='checkbox' id='study' name='roomtype' value='study' />
                  <label id='fife' for='study'>
                    <div>STUDY</div>
                  </label>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 1 }}>
                <div className='an-option6' onClick={() => this.change('an-option6', 'room6')}>
                  <input style={{ border: 'none' }} className='optionSix' type='text' id='other' name='roomtype' placeholder='OTHERS(PLEASE SPECIFY)' />
                  <label id='six' for='other' />
                </div>
              </Col>
            </Row>
          </Col>
        </Container>

        <Container style={{ padding: 10 }}>
          <Container className='room1'>
            <Row className='justify-content-center' style={{ padding: 20 }}>
              <Col md={{ span: 8 }}>
                <h1>Living Room area:</h1>
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
          </Container>
        </Container>

        <Container style={{ padding: 10 }}>
          <Container className='room2'>
            <Row className='justify-content-center' style={{ padding: 20 }}>
              <Col md={{ span: 8 }}>
                <h1>Master bedroom area:</h1>
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
          </Container>
        </Container>

        <Container style={{ padding: 10 }}>
          <Container className='room3'>
            <Row className='justify-content-center' style={{ padding: 20 }}>
              <Col md={{ span: 8 }}>
                <h1>Children's bedroom area:</h1>
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
          </Container>
        </Container>

        <Container style={{ padding: 10 }}>
          <Container className='room4'>
            <Row className='justify-content-center' style={{ padding: 20 }}>
              <Col md={{ span: 8 }}>
                <h1>Guest Room area:</h1>
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
          </Container>
        </Container>

        <Container style={{ padding: 10 }}>
          <Container className='room5'>
            <Row className='justify-content-center' style={{ padding: 20 }}>
              <Col md={{ span: 8 }}>
                <h1>Study Room area:</h1>
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
          </Container>
        </Container>

        <Container style={{ padding: 10 }}>
          <Container className='room6'>
            <Row className='justify-content-center' style={{ padding: 20 }}>
              <Col md={{ span: 8 }}>
                <h1>Other Room area:</h1>
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
          </Container>
        </Container>

      </div>
    )
  }
}

export default Step3
