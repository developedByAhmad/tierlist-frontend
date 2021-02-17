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
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
class Navbaradmin extends Component {
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
              <Nav.Link href="#home"></Nav.Link>
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
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
                  <Link to="/AdminPanel">
                    {" "}
                    <AiOutlinePaperClip /> Admin Panel
                  </Link>
                </div>
              </div>
              <div className="row">
                <a className="SignoutButton" onClick={this.handleLogOut}>
                  <FaSignOutAlt /> Signout
                </a>
              </div>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbaradmin;
