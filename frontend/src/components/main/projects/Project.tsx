import { Card, Row, Col } from 'react-bootstrap';

const Project: React.FC = () => {
  return (
    <Card className="project-card mb-3" style={{ maxWidth: '540px' }}>
      <Row className="g-0">
        <Col md={4}>
          <Card.Img 
            src="https://via.placeholder.com/150" 
            alt="Card image" 
            className="img-fluid rounded-start"
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Project;
