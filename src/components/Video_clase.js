import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import csuma from '../assets/Clases/suma.mp4';
import regresar from '../assets/back.png';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import btn_anterior from '../assets/anterior.png';
import btn_siguiente from '../assets/siguiente.png';
import {motion} from 'framer-motion';

export default class Video_clase extends Component{
    constructor(props){
        super(props);
    }
    imgback={
        width:'35px',
        height:'35px',
        top:'20%',
        left:'5%',
        position:'absolute'
    }
    estilos={
        fontSize: 48,
        fontFamily: 'Palatino Linotype',
        borderRadius: "10%",
        marginTop: "-5%",
        textAlign: "Center",
        minWidth: "100%",
        minHeight: "100%",
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: '#a73b3b',
        color: 'White',
        boxShadow: '0px 0px 5px 1px black'
    }

    estiloheader={
        fontFamily: 'Palatino Linotype',
        fontSize: '20px',
        color: 'White',
        backgroundColor: '#a73b3b'
    }

    estilobtn={
        marginLeft: '25%',
        borderRadius: '30%',
        backgroundColor: '#a73b3b',
        width: '50%',
    }

    estilo_anterior={
        backgroundColor: '#a73b3b',
        borderRadius:'50%',
        width: '40px',
        height: '40px',
        marginRight:'0%',
        marginLeft: '35%'
    }
    
    render(){
        return(
            <motion.div
            initial={{ opacity:0}}
            animate={{ opacity:1}}
            exit={{ opacity:0}}
            >

                <div className='container'>
                    <Card style={{border: 0}}>
                        <Card.Header style={this.estilos} className="">Suma</Card.Header>
                        <Link to={'/'}><img style={this.imgback} src={regresar}/></Link>
                    </Card>

                    <div style={{paddingTop: '10%'}}>
                        <Card className=''>
                        <Card.Header style={this.estiloheader}>Clase#1</Card.Header>
                        <Card.Body>
                                <video width="100%" height="100%" controls>
                                    <source src={csuma} type='video/mp4'></source>
                                </video>
                                <br/>
                                <Button style={this.estilobtn}>Ejercicios</Button>
                            </Card.Body> 
                            <Card.Footer>
                            <Container>
                                <Row>
                                    <Col><Link to={'/clase_suma'}><img disabled style={this.estilo_anterior} src={btn_anterior}></img></Link></Col>
                                    <Col><Link to={'/clase_resta'}><img style={this.estilo_anterior} src={btn_siguiente}></img></Link></Col>
                                </Row>
                            </Container>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </motion.div>
        )
    }
}