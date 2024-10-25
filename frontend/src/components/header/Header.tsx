import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './custom.css'; // Import your custom CSS


type NavbarProps = {
    className?: string
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <nav className={className}>
            <Container fluid className='my-nav-container'>
                <Nav defaultActiveKey="/home" as="ul" className="d-flex justify-content-between w-100">
                    <Nav.Item as="li" className="me-auto">
                        <h1>Jonny</h1>
                    </Nav.Item>
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
                        <Nav.Link eventKey="link-2">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </nav>
    )
}

export default Navbar;