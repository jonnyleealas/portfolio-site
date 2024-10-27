import './contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact: React.FC = () => {
    return (
        <Form className='contact-card form-group '>
            <h1 className="contact-title mb-4">Contact Me</h1> {/* Add the title here */}
            
            <Form.Group className="mb-4" controlId="formBasicEmail">
              
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button 
                type="submit" 
                className="light-grey-button w-100"
            >
                Send
            </Button>
        </Form>
    );
}

export default Contact;
