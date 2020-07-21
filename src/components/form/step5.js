import React, { Component } from 'react'
import { Container, Row, Col, Card, CardColumns } from 'react-bootstrap'
import furniture from './furniture.json'
import './css/step1.css'
import logo from './images/Edra.jpg'

class Step5 extends Component {
  constructor (props) {
    super(props)

    this.state = {
      Furniture: []
    }
  }

  componentDidMount () {
    this.setState({
      Furniture: furniture
    })
  }

  render () {
    if (this.props.currentStep !== 5) {
      return null
    }

    const list = this.state.Furniture.map((item, index) => {
      return (
        <Card key={item.index}>
          <Card.Img variant='top' src={logo} />
          <Card.Body>
            <Card.Text>
              {item.Name}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    })

    let card = []; const deck = [<br />]
    for (let i = 0; i < list.length; i = i + 3) {
      card = list.filter((item, idx) => {
        return idx >= i && idx < i + 3
      })

      deck.push(<CardColumns>{card}</CardColumns>)
      deck.push(<br />)
    }
    return (
      <div className='form-group'>
        <Row className='justify-content-center' style={{ padding: 20 }}>
          <Col md={{ span: 4 }}>
            <h1>Which furniture style do you like the most?</h1>
          </Col>
        </Row>

        <Container>
          {deck}
        </Container>
      </div>
    )
  }
}

export default Step5
