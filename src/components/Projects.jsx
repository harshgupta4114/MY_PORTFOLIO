import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pic1 from '../assets/images/my_portfolio_image.png'
import pic2 from '../assets/images/trip_planner.png'
import pic3 from '../assets/images/netflix_clone.jpg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
  
    {
      title: "Personal Portfolio Website",
      description: "Built during the learning phase of React, This a Personal Portfolio website. Used some simple API calls to fetch rating and rankings of various coding platforms",
      imgUrl: pic1,
      //links:"https://github.com/sumit2002agarwal/Reduce-Your-Bits",
    },
    {
      title: "Trip planner",
        description: "A website for planning trips and maintaining budget",
        imgUrl: pic2,
        //links:"https://github.com/sumit2002agarwal/Reduce-Your-Bits",

    },
    
      {
        title: "Netflix Clone",
        description: "Created a website that allows users to explore and enjoy a wide range of movies and TV shows",
        imgUrl: pic3,
        //links:"https://github.com/sumit2002agarwal/Reduce-Your-Bits",
      },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a few projects that I made in the process of learning development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}