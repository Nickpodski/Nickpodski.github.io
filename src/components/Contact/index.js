import React from 'react';
import "./style.css";
import { Container, Row, Col} from 'react-bootstrap';

const Content = () => {

  return (
    <Container className="about-me mt-5 p-5 text-white text-center">
      <Row xs={4} lg={10}>
        <Col xs={12} lg={12}>
          <h1 className="h1">Nicholas Podniestrzanski</h1>
          <h2 className="h2">Email: <a href="mailto: Nickpodski@gmail.com">Nickpodski@gmail.com</a></h2>
          <h2 className="h2">Phone:<a href="tel:727-686-8782">727-686-8782</a></h2>
          <h2 className="h2">Résumé: <a href="assets/documents/Nick_P_Coding_Resume_61021.pdf" download><i className="material-icons medium">cloud_download</i></a></h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;