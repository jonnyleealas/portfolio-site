import { Card, Row, Col } from "react-bootstrap";
import './Project.css';

const Project = () => (
  <Row className="g-4">
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className="timeline-card shadow-sm mb-4" style={{ width: '1000px', height: '371.66px' }}>
        <Row className="g-0">
          <Col md={4}>
            <Card.Img
              variant="top"
              src="https://cdn.prod.website-files.com/66d86945c818da8aabd7df53/66fe6aa5c00badf965d916dc_Container.png"
              alt="Project"
              className="timeline-image"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 61vw, (max-width: 991px) 57vw, (max-width: 1279px) 54vw, 560.4765625px"
              srcSet="
                https://cdn.prod.website-files.com/66d86945c818da8aabd7df53/66fe6aa5c00badf965d916dc_Container-p-500.png 500w,
                https://cdn.prod.website-files.com/66d86945c818da8aabd7df53/66fe6aa5c00badf965d916dc_Container-p-800.png 800w,
                https://cdn.prod.website-files.com/66d86945c818da8aabd7df53/66fe6aa5c00badf965d916dc_Container-p-1080.png 1080w,
                https://cdn.prod.website-files.com/66d86945c818da8aabd7df53/66fe6aa5c00badf965d916dc_Container-p-1600.png 1600w,
                https://cdn.prod.website-files.com/66d86945c818da8aabd7df53/66fe6aa5c00badf965d916dc_Container.png 1845w"
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <div className="timeline-content">
                <h2 className="heading-4">Project</h2>
                <p className="text">A social network platform for influencers, agencies, and brands to collaborate for business purposes.</p>
                <a href="/project" className="button-wrapper">
                  <button className="btn btn-primary">View more</button>
                </a>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

export default Project;
