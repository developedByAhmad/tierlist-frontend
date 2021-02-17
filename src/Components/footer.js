import React, { Component } from "react";
import FooterLogo from "../asserts/footerLogo.png";
class footer extends Component {
  render() {
    return (
      <div>
        <div className="row p-30">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <div className="footerlogo">
                  <img src={FooterLogo} />
                </div>
              </div>

              <div className="col-6">
                <h2 className="footer-Heading">Frash Tier</h2>
                <p className="footer-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tempus lorem quis metus tempor mattis. Nam congue sodales augue,
              vitae mattis urna aliquet nec. Donec vitae auctor nisi.
            </p>
          </div>
        </div>
        <div className="row centered">
          <p className="footer-description">Copy All Right Resvered</p>
        </div>
      </div>
    );
  }
}

export default footer;
