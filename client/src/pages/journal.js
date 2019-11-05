import React, { Component } from "react";

import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class JOURNAL extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                MY PERSONAL JOURNAL
              </h1>
            </Jumbotron>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default JOURNAL;