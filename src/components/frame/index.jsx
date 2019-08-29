import React from "react";
import Footer from "./footer";
import ScrollTop from "./scroll_top";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
const Template = props => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div className="content">
            <Navbar />
            <div className="container-fluid">{props.children}</div>
          </div>
          <Footer />
        </div>
        <ScrollTop />
      </div>
    </div>
  );
};

export default Template;
