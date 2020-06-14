import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/flat.png';
import { Navbar, Button, Form } from 'react-bootstrap';

import Footer from '../../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div id="home-page">
        <Navbar id="navbar">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-top"
                alt="logo cristal"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button id="btn-signup" variant="info">
                <Link to="/signup" id="btn-signup">
                  Criar Conta
                </Link>
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        <Form>
          <br />
          <h2>Vamos começar!</h2>
          <br />
          <br />
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              id="input"
              type="email"
              placeholder="Digite seu email, telefene ou CPF"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control
              id="input"
              type="password"
              placeholder="Digite sua senha"
            />
          </Form.Group>
          <Button id="btn-login" variant="info">
            <Link to="/dashboard">Entrar</Link>
          </Button>
          <br />
          <br />
          <Link to="/newpassword"> Esqueci minha senha</Link>
        </Form>

        <Footer />
      </div>
    );
  }
}
