import React from "react";
import {  useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  let location = useLocation();
  let navigate = useNavigate();

  const Logout = (()=>{
    localStorage.clear();
    window.location.reload();
  //  return  navigate("/login");
  })
  return (
    <div>
      <ToastContainer />
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          {/* <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">
            Smart Electronics
          </span> */}
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Ssmart Admin
              </a>
            </div>
          </div>

          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Menu */}

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <a href="#" className={location.pathname=="/" ?"nav-link active" : "nav-link"}>
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="category" className={location.pathname=="/category" ?"nav-link active" : "nav-link"}>
                  <i className="nav-icon fas fa-circle nav-icon" />
                  <p>Categories</p>
                </a>
              </li>
             
              <li className="nav-item">
                <a href="products" className={location.pathname=="/products" ?"nav-link active" : "nav-link"} >
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Products
                  </p>
                </a>
                
              </li>

              <li className="nav-item">
                <a href="upload-images" className={location.pathname=="/upload-images" ?"nav-link active" : "nav-link"} >
                  <i className="nav-icon fa fa-upload" />
                  <p>
                    Upload Images
                  </p>
                </a>
                
              </li>

              
              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-circle nav-icon" />
                  <p>Banners & Offers</p>
                </a>
              </li>

              


              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <p>
                    Customers
                    <span className="right badge badge-success">258</span>
                  </p>
                </a>
              </li>

              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-bell" />
                  <p>Notifications</p>
                  <span className="right badge badge-warning">58</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-landmark" />
                  <p>Bank Account Details</p>
                </a>
              </li>

             
              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-lock" />
                  <p>Profile</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="" onClick={Logout} className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p>Logout</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>FAQ</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default Menu;
