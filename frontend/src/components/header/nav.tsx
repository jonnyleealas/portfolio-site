import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './custom.css'; // Import your custom CSS

function ListExample() {
  return (
    <Container fluid className='my-nav-container'>
      <Nav defaultActiveKey="/home" as="ul" className="d-flex justify-content-end w-100 me-5 me-lg-0">
        <Nav.Item as="li">
          <Nav.Link href="/home">About</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default ListExample;
