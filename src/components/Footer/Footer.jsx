import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { StyledFooter } from './StyledFooter';
import './footer.css';


const AppFooter = () => {
    return (
        <React.Fragment>

        


        <Row className="myFooter">
        
        
        <Col>
            <br/>
        </Col>



        <Col style={{textAlign: 'center'}}>
        <p>© 2020 Relata LLC</p>
        </Col>



        <Col>
            <br/>
        </Col>

        </Row>


        
        

    
    
       
        </React.Fragment>
    )
}

export default AppFooter;

