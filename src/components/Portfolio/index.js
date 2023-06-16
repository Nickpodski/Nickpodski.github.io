import React from 'react';
import "./style.css";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const Portfolio = () => {
  const homonymSite = 'https://wchenausky.github.io/project-1/';
  const homonymRepo = 'https://github.com/wchenausky/project-1'
  const dndRepo = 'https://github.com/Nickpodski/My_DND_SpellBook';
  const dndSite = 'https://radiant-island-35045.herokuapp.com/login';
  const weatherRepo = 'https://github.com/Nickpodski/Weather_Dashboard_NP';
  const weatherSite = 'https://nickpodski.github.io/Weather_Dashboard_NP/';
  const workoutSite = 'https://gentle-chamber-10770.herokuapp.com/?id=607d8fc0549b61001521208e';
  const workoutRepo = 'https://github.com/Nickpodski/Workout_Tracker_NP';
  const reelSite = 'https://reeljunkie.herokuapp.com/';
  const reelRepo = 'https://github.com/Nickpodski/reel_junkie';
  const budgetSite = 'https://blooming-taiga-98988.herokuapp.com/';
  const budgetRepo = 'https://github.com/Nickpodski/Budget_Tracker_NP';
  return (
    <Container className="portfolio-container mt-5 mb-5 p-1">
      <Row xs={4} lg={10}>
        <Col xs={12} lg={4}>
          <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px', }}>
            <Card.Img variant="top" src="./assets/images/reel_junkie.png" />
            <Card.Body>
              <Card.Title>Reel Junkie!</Card.Title>
              <Card.Text>
                A website for movie lovers!
                </Card.Text>
              <Button className="m-2" variant="primary" onClick={() => window.open(reelSite, "_blank")}>Site Link!</Button>
              <Button className="m-2" variant="primary" onClick={() => window.open(reelRepo, "_blank")}>Repo Link!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px', }}>
            <Card.Img variant="top" src="./assets/images/Homepage.png" />
            <Card.Body>
              <Card.Title>Homonym!</Card.Title>
              <Card.Text>
                My first group project app that shows if words have different meanings.
                </Card.Text>
              <Button className="m-2" variant="primary" onClick={() => window.open(homonymSite, "_blank")}>Site Link!</Button>
              <Button className="m-2" variant="primary" onClick={() => window.open(homonymRepo, "_blank")}>Repo Link!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px', }}>
            <Card.Img variant="top" src="./assets/images/MYDND.png" />
            <Card.Body>
              <Card.Title>My DND SpellBook!</Card.Title>
              <Card.Text>
                My second group project! We wanted to make more creative approach to the dnd spellbook!
                </Card.Text>
              <Button className="m-2" variant="primary" onClick={() => window.open(dndSite, "_blank")}>Site Link!</Button>
              <Button className="m-2" variant="primary" onClick={() => window.open(dndRepo, "_blank")}>Repo Link!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={4} lg={10}>
      <Col xs={12} lg={4}>
          <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px', }}>
            <Card.Img variant="top" src="./assets/images/Start_Page.png" />
            <Card.Body>
              <Card.Title>Weather Forecast!</Card.Title>
              <Card.Text>
                A Weather forecast Dashboard! You can search any city in the world and see weather info!
                </Card.Text>
              <Button className="m-2" variant="primary" onClick={() => window.open(weatherSite, "_blank")}>Site Link!</Button>
              <Button className="m-2" variant="primary" onClick={() => window.open(weatherRepo, "_blank")}>Repo Link!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px', }}>
            <Card.Img variant="top" src="./assets/images/budget.png" />
            <Card.Body>
              <Card.Title>Budget Tracker!</Card.Title>
              <Card.Text>
                A simple budget tracker app I made!
                </Card.Text>
              <Button className="m-2" variant="primary" onClick={() => window.open(budgetSite, "_blank")}>Site Link!</Button>
              <Button className="m-2" variant="primary" onClick={() => window.open(budgetRepo, "_blank")}>Repo Link!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="m-4 p-3" bg="dark" text="light" style={{ width: '300px', }}>
            <Card.Img variant="top" src="./assets/images/workout.png" />
            <Card.Body>
              <Card.Title>Fitness Tracker!</Card.Title>
              <Card.Text>
                A simple fitness tracker that I made for a user to track their workouts, and workout trends.
                </Card.Text>
              <Button className="m-2" variant="primary" onClick={() => window.open(workoutSite, "_blank")}>Site Link!</Button>
              <Button className="m-2" variant="primary" onClick={() => window.open(workoutRepo, "_blank")}>Repo Link!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;