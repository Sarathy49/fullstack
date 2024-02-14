import { Nav, Navbar } from "rsuite"
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from "react-router-dom";

const CustomNavebar = () => {
  return (
    <Navbar>
    <Navbar.Brand href="#">EVENTO</Navbar.Brand>
    <Nav pullRight>
      <Nav.Item icon={<HomeIcon />}><Link to={'/home'}>Home</Link></Nav.Item>
      <Nav.Item><Link to={'/about'}>About</Link></Nav.Item>
      <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
      <Nav.Menu title="Events">

      <Nav.Item><Link to="/allevent">All Events</Link></Nav.Item>
      <Nav.Item><Link to="/find-events">Find Events</Link></Nav.Item>
      </Nav.Menu>
      <Nav.Menu title="Profile">
        <Nav.Item><Link to="/userprofile">My Profile</Link></Nav.Item>
        <Nav.Item><Link to="/">Login</Link></Nav.Item>
      </Nav.Menu>
    </Nav>
    
  </Navbar>
    
  )
}

export default CustomNavebar