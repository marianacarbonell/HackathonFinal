import React, {Component} from 'react';
import './companyprofile.css';
import {Container, Row, Col, Button, Image } from 'react-bootstrap';
import profileCompany from './img/profile-company.png';
import tela from './img/tela-letra.png';

class CompanyProfile extends Component{

    render(){
        return(
            <div id="container">
                <Row id="back"><i id="icon-back" class="fas fa-chevron-left"></i>BACK</Row>
                <Row id="row-tittle">
                    <Col id="tittle">Textil Sumey</Col>
                    <Col>
                        <Image id="profile" src={profileCompany} roundedCircle />
                        <div id="row-text">
                            <Row id="mayorista" className="text">Mayorista textil en</Row>
                            <Row id="recoleta" className="text">Recoleta, Chile</Row>
                        </div>
                    </Col>
                </Row>
                
                
                <Row id="row-type">
                    <div id="col-info">Material reutilizable disponible</div>
                    <Col> <Image id="tela-icon" src={tela}/></Col>
                </Row>
                <Row id="horario">Horarios</Row>
                <Row id="row-horario">
                    <Col className="day">L</Col>
                    <Col className="day">M</Col>
                    <Col className="day">W</Col>
                    <Col className="day">J</Col>
                    <Col className="day">V</Col>
                    <Col className="day">S</Col>
                </Row>
                <Row id="five">Entre 17:00 - 18:00</Row>
                <Row id="row-info">
                    <div>Dirección</div>
                    <div>Antonia López de Bello 285, Recoleta</div>
                    <div>Región Metropolitana</div>
                </Row>
                <Row id="button-profile"><Button variant="outline-primary">GENERAR RUTA</Button></Row>
            </div>
        )
    }
}

export default CompanyProfile;