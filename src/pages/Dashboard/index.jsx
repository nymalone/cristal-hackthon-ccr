import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/flat.png';
import health from '../../assets/health.png';
import exercise from '../../assets/exercise.png';
import food from '../../assets/food.png';

import Footer from '../../components/Footer';
import { Navbar, Row, Col, Container, Card, CardDeck } from 'react-bootstrap';
import { FaRegStar, FaRoad, FaBed, FaRoute, FaMedal } from 'react-icons/fa';

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
            <p className="welcome">Bem vindo!</p>
          </Navbar.Collapse>
        </Navbar>

        <Container id="stats">
          <Row xs={5}>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaRegStar className="star-icon" />
                <br />
                000 pontos
              </Card.Subtitle>
            </Col>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaRoad className="road-icon" />
                <br />
                00km rodados
              </Card.Subtitle>
            </Col>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaBed className="bed-icon" />
                <br />
                00h de sono
              </Card.Subtitle>
            </Col>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaRoute className="route-icon" />
                <br />
                00 destinos
              </Card.Subtitle>
            </Col>
          </Row>
        </Container>

        <Container fluid id="destination">
          <Row>
            <Col>
              <Link to="/destination">INICIAR NOVA VIAGEM</Link>
            </Col>
          </Row>
        </Container>

        <Container fluid id="ranking">
          <Row>
            <Col>
              <br />
              <h2>Ranking da Cristal</h2>
              <p>
                <FaMedal /> <b>Tonhão - </b> 10.000 pontos
              </p>
              <p>
                <FaMedal /> <b>João - </b> 9.000 pontos
              </p>
              <p>
                <FaMedal />
                <b>Tião - </b> 8.000 pontos
              </p>
              <span>
                VOCÊ <br />
                3.000 pontos{' '}
              </span>
              <br />
              <br />
              <br />
              <h4>Convide amigos para participar e ganhe pontos!</h4>
              <button>CONVIDAR</button>
            </Col>
          </Row>
        </Container>

        <CardDeck className="tips mt-5 mb-5">
          <Card>
            <Card.Img variant="top" src={health} />
            <Card.Body>
              <a href="/">
                {' '}
                <h3>Dicas de Saúde</h3>{' '}
              </a>
              <Card.Text>
                Tem alguma dúvida sobre seus remédios? Quer saber como melhorar
                a sua saúde? Confira aqui dicas de especialista.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={exercise} />
            <Card.Body>
              <a href="/">
                {' '}
                <h3>Dicas de Exercícios</h3>{' '}
              </a>
              <Card.Text>
                Pratique alongamentos junto de profissionais. Acesse nosso
                acervo de vídeo aulas.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <br />
            <Card.Img variant="top" src={food} />
            <Card.Body>
              <br />
              <br />
              <a href="/">
                {' '}
                <h3>Dicas de Alimentação</h3>{' '}
              </a>
              <Card.Text>
                Veja as dicas de outros caminhoneiros dos melhores restaurantes
                pela estrada.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
