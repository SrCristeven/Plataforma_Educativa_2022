import React, {Component} from "react";
import { Card } from "react-bootstrap";
import bg from "../assets/bg.jpeg";
import suma from '../assets/SUMA.png';
import resta from '../assets/RESTA.png';
import multiplicacion from '../assets/MULT.png';
import division from '../assets/DIV.png';
// import opciones from '../assets/conf.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

export default class Menu_principal extends Component{
    constructor(props){
        super(props);
    }

    estilos={
        fontSize: 48,
        fontFamily: 'Palatino Linotype',
        borderRadius: "5%",
        marginTop: "-5%",
        textAlign: "Center",
        minWidth: "100%",
        minHeight: "100%",
        marginLeft: 0,
        marginRight: 0,
        boxShadow: '0px 0px 5px 1px black'
    }

    estilosimg={
        minWidth: "100%",
        minHeight: "100%",
        marginTop: "20%",
        paddingBottom:"30%"
    }
    estilosconfig={
        position: "absolute",
        top:"25%",
        left:"90%",
        height: "2rem",
        width:"2rem"
    }
    estilosbtn={
        position: "absolute",
        top:"25%",
        left:"15%",
        height: "8rem",
        width:"8rem"
    }
    estilosbtnr={
        position: "absolute",
        top:"25%",
        height: "8rem",
        width:"8rem"
    }
    estilosbtnm={
        position: "absolute",
        top:"45%",
        left:"15%",
        height: "8rem",
        width:"8rem"
    }
    estilosbtnd={
        position: "absolute",
        top:"45%",
        height: "8rem",
        width:"8rem"
    }
    render(){
        return(
            <>
                <motion.div
                initial={{ opacity:0}}
                animate={{ opacity:1}}
                exit={{ opacity:0}}
                >

                    <div className="container">
                        <Card style={{border: 0}}>
                            <Card.Header style={this.estilos} className="">Menú</Card.Header>
                        </Card>
                        <div style={{position:"relative"}}>
                            <img style={this.estilosimg} src={bg}/>
                            <Container>
                                <Row>
                                    <Col><Link to={'/clase_suma'}><img style={this.estilosbtn} src={suma}></img></Link></Col>
                                    <Col><Link to={'/clase_resta'}><img style={this.estilosbtnr} src={resta}></img></Link></Col>
                                </Row>
                                <Row>
                                    <Col><Link to={'/clase_multiplicacion'}><img style={this.estilosbtnm} src={multiplicacion}></img></Link></Col>
                                    <Col><a onClick={()=>alert('Has dado click al boton de division')}><img style={this.estilosbtnd} src={division}></img></a></Col>
                                </Row>
                            </Container>
                        </div>
                    </div> 
                </motion.div>
            </>   
        )
    }
}

// export default function Menu_principal(){
//     estilos={
//         backgroundColor: 'Yellow'
//     }
//     return(
//      <>
//        <div style={{estilos}} className="">
            
//         </div> 
//      </>   
//     )
    
// }