import React, { useState } from 'react';
import hamburger from '../Img/hamburger_icon.png'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TopBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Container fluid>
            <Row className="topbar-row">
                <Col xs={{span:4, offset:8}} md={{span:1, offset:8}} style={{textAlign:'center'}}>
                    <img src={hamburger} alt='Hamburger Menu Icon' style={{maxWidth:'100%', maxHeight:'5vh', cursor:"pointer"}} onClick={handleShow}></img>
                </Col>
            </Row>
        </Container>

        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div><Button>Projects</Button></div>
                <div><Button>Github</Button></div>
                <div><Button>Contact</Button></div>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  );
}

export default TopBar;