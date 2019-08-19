import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion sticky-top"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            {/* <i className="fas fa-laugh-wink" /> */}
          </div>
          <div className="sidebar-brand-text mx-3">
            GIS Dashboard
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider sticky-top" />
        <div className="sidebar-heading">Infrastruktur</div>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-clipboard" />
            <span>Data Umum</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div
              className="bg-white py-2 collapse-inner rounded"
              style={{ overflowX: "scroll" }}
            >
              <h6 className="collapse-header">Input Data Umum</h6>
              <Link
                to="/sig/trotoar"
                className="collapse-item"
                href="IDU_DataInfraTrotoar.html"
              >
                Input Data Umum Infrastruktur
              </Link>
              <Link
                to="/sig/wilayah"
                className="collapse-item"
                href="IDU_DataWilayah.html"
              >
                Data Wilayah
              </Link>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
