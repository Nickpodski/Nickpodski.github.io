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
              src="assets/images/IMG_20200530_131146.jpg"
              alt="Me"
            />
          </Media>
        </Col>
      </Row>
      <Row>
        <Media.Body className="text-white">
          <h1>About Me!</h1>
          <p className="flow-text">
            Hello, My name is Nicholas Podniestrzanski, but I go by Nick. I'm currently taking a Coding Bootcamp
            from UCF. I've been working in the Video and Television broadcasting industries for the past 8 years.
            I've recently decided to get back into coding. Before I decided to go to film school I was very much on
            a path for computer programming. Then I decided to go to film school!
    </p>
          <p className="flow-text">
            In February of 2012 I graduated from Full Sail University with a Bachelor's Degree in Film.
            I got a job a at ESPN a few months later. I worked there Freelance for a view years. I worked
            various freelance jobs for the past 8 years, but in 2014 I started freelance at Golf Channel.
            I've worked at Golf channel as my primary Job for nearly 7 years. This year they decided to
            do a company move to Stamford, CT. I didn't make the move with them, and decided to get back
            into coding.
    </p>
          <p className="flow-text">
            Over the years I've done various video productions jobs including; Directing, Producing,
            Video Editing, Live Video Editing, Camera Operation, Live Directing/Producing, and various
            other video produciton jobs. My hightlight of my career was being credited as a Producer for
      the early coverage of <a href="https://www.theopen.com/" target="_blank" rel="noreferrer">2019 The Open</a>.
    </p>
          <p className="flow-text">
            My early years of programming and coding has aided in my quest to become a Full Stack Web
            Developer. And hopefully at the end of this bootcamp I will begin my new career, and my past
            experiences will give me an edge.
    </p>
        </Media.Body>
      </Row>
    </Container>
  );
};

export default Home;