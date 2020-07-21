import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './css/step4.css'

class step4 extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
    this.change = this.change.bind(this)
  }

  change (classname) {
    if (document.getElementsByClassName(classname)[0].style.border === '3px solid black') {
      document.getElementsByClassName(classname)[0].style.border = '1px solid black'
    } else {
      document.getElementsByClassName(classname)[0].style.border = '3px solid black'
    }
  }

  render () {
    if (this.props.currentStep !== 4) { // Prop: The current step
      return null
    }
    return (
      <>
        <Container>
          <Row className='justify-content-center' style={{ padding: 20 }}>
            <Col md={{ span: 8 }}>
              <h1>Which color palette looks best for your room?</h1>
              <p>Choose more than one!</p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Col>
            <Row style={{ padding: 10 }}>
              <Col md={{ span: 2 }}>
                <div className='an-option1' onClick={() => this.change('an-option1')} style={{ backgroundColor: 'White' }}>
                  <input className='optionOne' type='checkbox' id='living' name='roomtype' value='Living room' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option2' onClick={() => this.change('an-option2')} style={{ backgroundColor: 'ivory' }}>
                  <input className='optionTwo' type='checkbox' id='master' name='roomtype' value='master' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option3' onClick={() => this.change('an-option3')} style={{ backgroundColor: 'Beige' }}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option4' onClick={() => this.change('an-option4')} style={{ backgroundColor: 'Taupe' }}>
                  <input className='optionFour' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option5' onClick={() => this.change('an-option5')} style={{ backgroundColor: 'Grey' }}>
                  <input className='optionFive' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option6' onClick={() => this.change('an-option6')} style={{ backgroundColor: 'Black' }}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
            </Row>


            <Row style={{ padding: 10 }}>
              <Col md={{ span: 2 }}>
                <div className='an-option7' onClick={() => this.change('an-option7')} style={{ backgroundColor: 'Brown' }}>
                  <input className='optionOne' type='checkbox' id='living' name='roomtype' value='Living room' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option8' onClick={() => this.change('an-option8')} style={{ backgroundColor: 'Aqua' }}>
                  <input className='optionTwo' type='checkbox' id='master' name='roomtype' value='master' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option9' onClick={() => this.change('an-option9')} style={{ backgroundColor: 'Green' }}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option10' onClick={() => this.change('an-option10')} style={{ backgroundColor: 'Blue' }}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option11' onClick={() => this.change('an-option11')} style={{ backgroundColor: 'Red' }}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option12' onClick={() => this.change('an-option12')} style={{ backgroundColor: 'Yellow' }}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
            </Row>


            <Row style={{ padding: 10 }}>
              <Col md={{ span: 2 }}>
                <div className='an-option13' onClick={() => this.change('an-option13')} style={{ backgroundColor: 'Pink' }}>
                  <input className='optionOne' type='checkbox' id='living' name='roomtype' value='Living room' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option14' onClick={() => this.change('an-option14')} style={{ backgroundColor: 'Orange' }}>
                  <input className='optionTwo' type='checkbox' id='master' name='roomtype' value='master' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option15' onClick={() => this.change('an-option15')} style={{ backgroundColor: 'Gold' }}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option16' onClick={() => this.change('an-option16')} style={{ backgroundColor: 'Silver' }}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option17' onClick={() => this.change('an-option17')} style={{ backgroundColor: 'Copper' }}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
              <Col md={{ span: 2 }}>
                <div className='an-option18' onClick={() => this.change('an-option18')} style={{ backgroundColor: 'Purple' }}>
                  <input className='optionThree' type='checkbox' id='children' name='roomtype' value='children' />
                  <label />
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </>
    )
  }
}

export default step4
