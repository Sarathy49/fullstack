import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button
} from "react-bootstrap";
import '../css/profile.css'
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState({
    username: "Sarathy",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Cityville",
    bio: "I love coding and building awesome things!",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save updated user data (e.g., send to server)
    console.log("Updated user profile:", user);
  };

  const Navigate=new useNavigate();
  const handleChangeBack=()=>{
    Navigate('/');
  }
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <Card className="Usercard">
            <Card.Header>
              <Card.Title as="h4">Edit Profile</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Username</label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Email</label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>First Name</label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>Last Name</label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>Address</label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>Bio</label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="bio"
                        value={user.bio}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className="btn-fill"
                  type="submit"
                  variant="info"
                >
                  Update Profile
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-user">
            
            <Card.Body>
              <div className="author">
                <h5 className="title">{user.firstName} {user.lastName}</h5>
                <p className="description">@{user.username}</p>
              </div>
              <p className="description text-center">{user.bio}</p>
              
                <Button className="bck" onClick={handleChangeBack}>Back</Button>
          
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;

