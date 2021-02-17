import React, { Component } from "react";
import { GrPlay } from "react-icons/gr";
import FooterLogo from "../asserts/footerLogo.png";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaSignOutAlt, FaTwitter, FaPatreon, FaUserTie } from "react-icons/fa";
import { AiOutlineDrag, AiFillYoutube } from "react-icons/ai";
import { FiTwitch } from "react-icons/fi";
import { Link } from "react-router-dom";
class NavbarUser extends Component {
  handleLogOut = () => {
    // localStorage.removeItem('jwtToken');
    localStorage.removeItem("loginToken");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Navbar bg="#8E0557" expand="lg">
          <Navbar.Brand href="#home">
            {/* <div className="row">
           <div className="play-button">
            <GrPlay style={{color:"gray"}}/>

               </div> 
           
      </div> */}
            <div className="footerlogo">
              <img src={FooterLogo} className="login-tier" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://www.youtube.com" target="blank">
                <AiFillYoutube className="userIcon" />
              </Nav.Link>
              <Nav.Link href="https://www.twitter.com" target="blank">
                <FaTwitter className="userIconTwitter" />
              </Nav.Link>
              <Nav.Link href="https://www.twitch.com" target="blank">
                <FiTwitch className="userIconTwitch" />
              </Nav.Link>
              <Nav.Link href="https://www.patreon.com" target="blank">
                <FaPatreon className="userIconPatreon" />
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
            </Nav>
            <Form inline>
              <div className="row">
                <div className="adminPanel">
                  <Link to="/User">
                    {" "}
                    <FaUserTie /> User
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="SignoutButton">
                  <FaSignOutAlt /> Signout
                </div>
              </div>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarUser;
