import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import SmartOne from "../../Assets/smartchart.jpg";
import SmartLine from "./LineChart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "January",
    customers: 4000,
    sales: 2400,
    amount: 2400,
  },
  {
    name: "Febraury",
    customers: 3000,
    sales: 1398,
    amount: 2210,
  },
  {
    name: "March",
    customers: 2000,
    sales: 9800,
    amount: 2290,
  },
  {
    name: "April",
    customers: 2780,
    sales: 3908,
    amount: 2000,
  },
  {
    name: "May",
    customers: 1890,
    sales: 4800,
    amount: 2181,
  },
  {
    name: "June",
    customers: 2390,
    sales: 3800,
    amt: 2500,
  },
  {
    name: "July",
    customers: 3490,
    sales: 4300,
    amount: 2100,
  },
];

function LineChart() {
  return (
    <BarChart
      width={650}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="customers" stackId="a" fill="#8884d8" />
      <Bar dataKey="sales" stackId="a" fill="#82ca9d" />
      <Bar dataKey="amount" fill="#ffc658" />
    </BarChart>
  );
}

function Dashboard() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
        </div>
        {/* /.content-header */}

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>

                    <p>Total Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>

                    <p>Recent Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>

                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>₹ 1,65,000</h3>

                    <p>Total Revenue</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-7">
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Reports <span>/Today</span>
                    </h5>

                    <div>
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-5">
                <div className="card">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Reports <span>/Today</span>
                    </h5>

                    <div>
                      <img src={SmartOne} alt="img" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>

              <section className="col-lg-12">
                <div className="card recent-sales overflow-auto">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">
                      Recent Sales <span>| Today</span>
                    </h5>

                    <table className="table table-borderless datatable">
                      <thead>
                        <tr>
                          <th scope="col">#Invoice No.</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a href="#">#123456</a>
                          </th>
                          <td>K Sathyam</td>
                          <td>
                            <a href="#" className="text-dark">
                              Amaze Battery 3000watts
                            </a>
                          </td>
                          <td>₹3500.00</td>
                          <td>
                            <span className="badge bg-success">Approved</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">#211147</a>
                          </th>
                          <td>R. Rakesh</td>
                          <td>
                            <a href="#" className="text-dark">
                              Usha Ceiling Fan
                            </a>
                          </td>
                          <td>₹1000.00</td>
                          <td>
                            <span className="badge bg-warning">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">#123049</a>
                          </th>
                          <td>M. Samantha</td>
                          <td>
                            <a href="#" className="text-dark">
                              Amaze Battery 5000 Watts
                            </a>
                          </td>
                          <td>₹1500.00</td>
                          <td>
                            <span className="badge bg-success">Approved</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">#2222644</a>
                          </th>
                          <td>SK. Syed</td>
                          <td>
                            <a href="#" className="text-dark">
                              Bajaj Bulbs 150watts
                            </a>
                          </td>
                          <td>₹500.00</td>
                          <td>
                            <span className="badge bg-danger">Rejected</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="#">#4562644</a>
                          </th>
                          <td>MD. Raheem Lehner</td>
                          <td>
                            <a href="#" className="text-dark">
                              Bajaja Cooker 1kg Cup
                            </a>
                          </td>
                          <td>₹1165.00</td>
                          <td>
                            <span className="badge bg-success">Approved</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              {/* right col */}
            </div>
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}

export default Dashboard;
