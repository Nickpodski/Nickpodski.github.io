import React from 'react';
import "./style.css";
import { Media, Container, Row, Col } from 'react-bootstrap';


const Home = () => {
  return (
    <Container className="justify-content-center about-me mt-5">
      <Row xs={12} lg={8}>
        <Col xs={4} lg={8}>
          <Media>
            <img
              width={250}
              height={250}
              className="mr-3 mt-5 mb-2"
              src="./assets/images/IMG_20200530_131146.jpg"
              alt="Me"
            />
          </Media>
        </Col>
      </Row>
      <Row>
        <Media.Body className="text-white">
          <h1>About Me!</h1>
        <p class="flow-text">
          My name is Nicholas Podniestrzanski, but I go by Nick.
        </p>  
        <p class="flow-text">
          My career started in video production. I have worked in everything from directing, producing,
          video editing (both live and post-production), producing and so much more! One of my favorite
          moments involved producing early coverage for the <a href="https://www.theopen.com/" target="_blank" rel='noreferrer'>2019 The Open</a>.
        </p>
        <p class="flow-text">
          Around the time of the pandemic, I rediscovered my love of coding, and enrolled in University
          of Central Florida’s Coding Bootcamp, finishing in June of 2021.
        </p>
        <p class="flow-text">
          I started working for Proforma in August of 2021. While initially hired as a Full Stack Web
          Developer, I transitioned to the QA Automation team, due to unplanned job vacancies.
          However, my passion and focus remain with Full Stack Development.
        </p>
        <p class="flow-text">
          In my time here, I have risen to Team Lead of QA Automation. Due to my focus on efficiency
          and consistency I was tasked with planning and developing the transition of our MS testing
          framework to Xunit.
        </p>
        <p class="flow-text">
          While I have enjoyed my time in QA Automation, I am looking for a role that allows me to flex
          my Full Stack muscles. I look forward to meeting you!
        </p>
        </Media.Body>
      </Row>
    </Container>
  );
};

export default Home;
