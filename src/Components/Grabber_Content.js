import React from "react";
import { Row, Col, Container, Button, Image, Carousel } from 'react-bootstrap'
import { Zoom, Fade } from "react-reveal";
import MePic from '../Img/Me.jpg'
import PopularNews from '../Img/popular_news.png'
import SimCompanies from '../Img/simcompanies.png'
import Skills from '../Img/skills.png'

function Grabber(){
    return(
    <>
        <Container fluid>
            <Row style={{paddingBottom:'15vh'}}>
                <Col lg={{span:4, offset:2}} style={{textAlign:'center'}}>
                    <Fade left>
                        <h1>The Developer Your Team Would Love To Have</h1>
                        <div style={{fontSize:'25px'}}>Hire me please, I'm awesome</div>
                    </Fade>
                </Col>
            </Row>
            <Row>
                <Col lg={{span:4, offset:2}}>
                    <Fade left delay={1000}>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={PopularNews}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={SimCompanies}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Skills}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Fade>
                </Col>
                <Col lg={{span:4}}>
                    <Fade right delay={500}>
                        <h1>The Developer Your Team Would Love To Have</h1>
                        <div style={{fontSize:'25px'}}>Hire me please, I'm awesome</div>
                    </Fade>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row style={{paddingBottom:'5vh'}}>
                <Col lg={{span:4, offset:2}} style={{textAlign:'center'}}>
                    <Zoom left>
                        <h1>The Developer Your Team Would Love To Have</h1>
                        <div style={{fontSize:'25px'}}>Hire me please, I'm awesome</div>
                    </Zoom>
                </Col>
                <Col lg={{span:4}}>
                    <Zoom right delay={1000}>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Image rounded src={MePic} alt='Picture of Logan Pederson' style={{height:'40vh'}}></Image>
                        </div>
                    </Zoom>
                </Col>
            </Row>
            <Zoom right delay={2000}>
                <Row>
                    <Col lg={{span:4, offset:6}} style={{textAlign:'center'}}>
                        <h1>Tadaaaa</h1>
                        <div style={{fontSize:'25px'}}>Hire me please, I'm awesome</div>
                    </Col>
                </Row>
            </Zoom>
        </Container>
    </>
);
}

export default Grabber;