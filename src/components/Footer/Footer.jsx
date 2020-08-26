import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { StyledFooter } from './StyledFooter';
import './footer.css';


const AppFooter = () => {
    return (
        <React.Fragment>
            <StyledFooter id="footer">
                <Container>


                    <Row>

                        <Col>
                            <span> Copyright Ⓒ Relata, 2020 </span>
                        </Col>

                        <Col>

                        </Col>

                    </Row>

                </Container>

            </StyledFooter>
        </React.Fragment>
    )
}

export default AppFooter;

