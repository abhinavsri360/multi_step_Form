import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import logo from './images/logo.svg'

function navbar () {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light' style={{ padding: 20 }}>
      <Navbar.Brand href='/'>
        <a href='/'>
          <img alt='icon' src={logo} style={{ width: 200 }} />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#features'>CREATE AN ATMOSPHERE<sup>TM</sup></Nav.Link>
          <Nav.Link href='#pricing'>SHOP</Nav.Link>
          <Nav.Link href='#pricing'>STORES</Nav.Link>
          <Nav.Link href='#pricing'>AT HOME STYLING</Nav.Link>
          <Nav.Link href='#pricing'>TAC</Nav.Link>
          <NavDropdown title='MORE' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>THE BRAND</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>QUALITY</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>DESIGN PHILOSOPHY</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>FABRIC BUYING GUIDE</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>CARE</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>PRESS</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>FAQS</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>FABRIC HAUS</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href='#pricing'>Login/Signup</Nav.Link>
          <Button variant='light'><Icon name='cart' size='sm' color='black' />(0)</Button>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='light'><Icon name='search' size='sm' color='black' /></Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar
