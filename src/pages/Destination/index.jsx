import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import logo from '../../assets/flat.png';
import {Navbar, Button, Form} from 'react-bootstrap';

import Footer from '../../components/Footer';

export default class Home extends Component {

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        );
    }

    render() {
        return (
            <div id="destination-page">
                <Navbar id="navbar">
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="logo cristal"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <p className="welcome">Para onde vamos?</p>
                    </Navbar.Collapse>
                </Navbar>

                <Form>
                    <br/>
                    <h2>Digite o seu destino abaixo:</h2>
                    <br/>
                    <br/>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control
                            id="input"
                            type="address"
                            placeholder="Endereço do seu destino"
                        />
                    </Form.Group>
                    <Button id="btn-login" variant="info">
                        <Link to="/dashboard">Enviar</Link>
                    </Button>
                    <br/>
                    <br/>
                </Form>

                <Footer/>
            </div>
        );
    }
}
