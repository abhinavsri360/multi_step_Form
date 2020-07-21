import React, { Component } from 'react'
import './css/home.css'
import { Container } from 'react-bootstrap'
import Footer from './footer'
import Step1 from './form/step1'
import Step2 from './form/step2'
import Step3 from './form/step3'
import Step4 from './form/step4'
import Step5 from './form/step5'
import Step6 from './form/step6'
import Step7 from './form/step7'
import Step8 from './form/step8'

class home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentStep: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  _next () {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev () {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    window.alert('Success')
  }

  get previousButton () {
    const currentStep = this.state.currentStep
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className='btn btn-secondary'
          type='button' onClick={this._prev}
        >
        Previous
        </button>
      )
    }
    // ...else return nothing
    return null
  }

  get nextButton () {
    const currentStep = this.state.currentStep
    // If the current step is not 3, then render the "next" button
    if (currentStep < 8) {
      return (
        <button
          className='btn btn-primary float-right'
          type='button' onClick={this._next}
        >
        Next
        </button>
      )
    }
    // ...else render nothing
    return null
  }

  get submitButton () {
    const currentStep = this.state.currentStep
    // If the current step is not 3, then render the "next" button
    if (currentStep === 8) {
      return (
        <button
          className='btn btn-success float-right'
          type='button' onClick={this.handleSubmit}
        >
        Submit
        </button>
      )
    }
    // ...else render nothing
    return null
  }

  render () {
    return (
      <>
        <div className='img1'>
          <div className='me'>
            <div className='sub-me'>
              <h1 id='h1'><i>Create an Atmosphere<sup>TM</sup></i></h1>
            </div>
          </div>
        </div>

        <Container>
          <form onSubmit={this.handleSubmit}>
            <Step1
              currentStep={this.state.currentStep}
            />

            <Step2
              currentStep={this.state.currentStep}
            />

            <Step3
              currentStep={this.state.currentStep}
            />

            <Step4
              currentStep={this.state.currentStep}
            />

            <Step5
              currentStep={this.state.currentStep}
            />

            <Step6
              currentStep={this.state.currentStep}
            />

            <Step7
              currentStep={this.state.currentStep}
            />

            <Step8
              currentStep={this.state.currentStep}
            />

            {this.submitButton}
            {this.previousButton}
            {this.nextButton}
          </form>
          <Footer />
        </Container>

      </>
    )
  }
}

export default home
