import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NoPage from "./pages/NoPage";
import Dashboard from "../Dashboard/Dashboard";
import AllProducts from "../AllProducts/AllProducts";
import Inverters from "../Inverters/Inverters";
import Batteries from "../Batteries/Batteries";
import Bulbs from "../Bulbs/Bulbs";
import Cookers from "../Cookers/Cookers";
import Fans from "../Fans/Fans";
import IronBoxes from "../IronBoxes/IronBoxes";
import MixerGrinders from "../MixerGrinders/MixerGrinder";
import Switches from "../Switches/Switches";

function Menu() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">
            Smart Electronics
          </span>
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
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </a>
              </li>
             
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Products
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Products</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inverters</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Batteries</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fans</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Cookers</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Switches</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Bubls</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Mixer Grinders</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Iron Boxes</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Other products</p>
                    </a>
                  </li>
                </ul>
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
                  <i className="nav-icon fas fa-th" />
                  <p>Register</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-sign-in-alt" />
                  <p>Login</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p>Profile</p>
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
