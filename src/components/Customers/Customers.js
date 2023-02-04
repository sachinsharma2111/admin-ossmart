import React from "react";
import syled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import "./Customers.css";
import Box from "@mui/material/Box";
import Item from "../../Assets/smartchart.jpg";
import styled from "styled-components";

const Export = styled.div`
  background-color: #6a7600;
  color: #fff;
  width: 100px;
`;

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "CustomerName",
    headerName: "Customer Name",
    width: 150,
    editable: false,
  },
  {
    field: "Mobile",
    headerName: "Mobile",
    width: 200,
    editable: true,
  },
  {
    field: "EmailId",
    headerName: "Email Id",
    width: 150,
    editable: true,
  },
  {
    field: "Password",
    headerName: "Password",
    type: "number",
    width: 130,
    editable: true,
  },

  {
    field: "DateofRegistered",
    headerName: "Date of Registered",
    type: "number",
    width: 120,
    editable: true,
  },

  {
    field: "Status",
    headerName: "Status",
    type: "number",
    width: 110,
    editable: true,
  },

  {
    field: "Actions",
    headerName: "View",
    type: "number",
    width: 110,
  },
];

const rows = [
  {
    id: 1,
    CustomerName: "Sai Kumar",
    Mobile: "+91-963509329",
    EmailId: "sairebba@gmail.com",
    Password: "sai1123*",
    DateofRegistered: "10-12-2022",
    Status: "Approved",
    Actions: "View",
  },

  {
    id: 2,
    CustomerName: "Sai Kumar",
    Mobile: "+91-963509329",
    EmailId: "sairebba@gmail.com",
    Password: "sai1123*",
    DateofRegistered: "10-12-2022",
    Status: "Approved",
    Actions: "View",
  },
  {
    id: 3,
    CustomerName: "Sai Kumar",
    Mobile: "+91-963509329",
    EmailId: "sairebba@gmail.com",
    Password: "sai1123*",
    DateofRegistered: "10-12-2022",
    Status: "Approved",
    Actions: "View",
  },
  {
    id: 4,
    CustomerName: "Sai Kumar",
    Mobile: "+91-963509329",
    EmailId: "sairebba@gmail.com",
    Password: "sai1123*",
    DateofRegistered: "10-12-2022",
    Status: "Approved",
    Actions: "View",
  },
  {
    id: 5,
    CustomerName: "Sai Kumar",
    Mobile: "+91-963509329",
    EmailId: "sairebba@gmail.com",
    Password: "sai1123*",
    DateofRegistered: "10-12-2022",
    Status: "Approved",
    Actions: "View",
  },

  {
    id: 6,
    CustomerName: "Sai Kumar",
    Mobile: "+91-963509329",
    EmailId: "sairebba@gmail.com",
    Password: "sai1123*",
    DateofRegistered: "10-12-2022",
    Status: "Approved",
    Actions: "View",
  },

  {
    id: 7,
    CustomerName: "Sai Kumar",
    Mobile: "+91-963509329",
    EmailId: "sairebba@gmail.com",
    Password: "sai1123*",
    DateofRegistered: "10-12-2022",
    Status: "Rejected",
    Actions: "View",
  },

  {
    id: 8,
    CustomerName: "Sai Kumar",
    Mobile: "+91-963509329",
    EmailId: "sairebba@gmail.com",
    Password: "sai1123*",
    DateofRegistered: "10-12-2022",
    Status: "Rejected",
    Actions: "View",
  },
];

function CustomersTable() {
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

function Customers() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Customers</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <div className="d-flex justify-content-end align-items-center">
                  <Export>Export</Export>
                </div>
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
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <section className="section">
                    <div className="row">
                      <CustomersTable />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Customers;
