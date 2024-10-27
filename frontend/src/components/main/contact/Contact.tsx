import './contact.css'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contact: React.FC = () => {
    return (
        <Form className='contact-card'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button 
  type="submit" 
  className="light-grey-button w-100"
>
  Submit
</Button>
      </Form>
    )
}

export default Contact



