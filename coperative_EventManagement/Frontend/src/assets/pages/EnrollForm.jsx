import '../css/enroll.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Link} from 'react-router-dom';
const EnrollForm = () => {

  return (
    <div className="feedback-popup">
      <div className="feedback-container" >
        <h2>Enrollment Form</h2>
        <Form noValidate>

   
          <Row className="mb-3">

     
        <Form.Group as={Col} md="4" controlId="validationFormikUsername2" style={{width:'100%'}}>
              <Form.Label style={{float:'left'}}>Event Name:</Form.Label>
              <InputGroup hasValidation style={{width:'100%'}}>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"
           
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  style={{height:40,marginBottom:20}}
                  />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2" style={{width:'100%'}}>
              <Form.Label style={{float:'left'}}>Submission Date:</Form.Label>
              <InputGroup hasValidation style={{width:'100%'}}>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"

                  aria-describedby="inputGroupPrepend"
                  name="username"
                  style={{height:40,marginBottom:20}}
                  />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2" style={{width:'100%'}}>
              <Form.Label style={{float:'left'}}>Event Date:</Form.Label>
              <InputGroup hasValidation style={{width:'100%'}}>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"

                  aria-describedby="inputGroupPrepend"
                  name="username"
                  style={{height:40,marginBottom:20}}
                  />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2" style={{width:'100%'}}>
              <Form.Label style={{float:'left'}}>Description</Form.Label>
              <InputGroup hasValidation style={{width:'100%'}}>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  type="text"

                  aria-describedby="inputGroupPrepend"
                  name="username"
                  style={{height:40,marginBottom:20}}
                  />
              </InputGroup>
            </Form.Group>
          
          <div className="button-container">
            <button className='feed-btn' style={{marginRight:60}}>
              Close
            </button>
            <button type="submit" className='feed-btn' ><Link to="/payment">Submit</Link></button>
          </div>
          </Row>
          </Form>
      </div>
    </div>
  );
};

export default EnrollForm;