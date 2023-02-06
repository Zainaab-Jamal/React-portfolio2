import React from "react";
import { Fragment } from "react";
import "./Footer.css";



class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <div className="bg-dark text-white footer">
          <div className="row col-12">
            <div className="col-4">
              <h6>Get In Touch</h6>
              <p>
                 0102800000
              </p>
              <p>
              zeinab@gmail.com
              </p>
            </div>
            <div className="col-4 text-center">
              <button className="btn btn-outline-light"> Contact Me </button>
            </div>
            <div className="col-4 text-end">
              
              <p>CopyRight © 2019 KR</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;