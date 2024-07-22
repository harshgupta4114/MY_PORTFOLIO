import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
      <p>Portfolio</p>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center text-sm-end">
            
            <div className="social-icon">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/harshgupta4114">
                <img src={navIcon2} alt="GitHub Icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/harsh-gupta-9a01b0274/">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/harshgupta2774/">
                <img src={navIcon3} alt="Instagram Icon" />
              </a>
            </div>
            <p>Developed by Harsh Gupta</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
