import React from "react";
import Footer from "./footer";
import ScrollTop from "./scroll_top";
import Sidebar from "./sidebar";

const Template = (props) => {
  console.log(props)
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div className="content">
            {props.children}
          </div>
          <Footer />
        </div>
        <ScrollTop />
      </div>
    </div>
  );
};

export default Template;
