import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { NavLink } from 'react-router-dom'

const Navbaar = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#/">CRUD MERN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cadastro">Adicionar</Nav.Link>
            <Nav.Link href="/dados">Dados</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbaar