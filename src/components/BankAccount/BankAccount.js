import React, { useState } from "react";
import syled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import "./BankAccount.css";
import Box from "@mui/material/Box";
import Item from "../../Assets/smartchart.jpg";
import styled from "styled-components";
import { Details } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "AccountType",
    headerName: "Account Type",
    width: 150,
    editable: false,
  },
  {
    field: "HolderName",
    headerName: "Holder Name",
    width: 200,
    editable: true,
  },
  {
    field: "AccountNo",
    headerName: "Account Number",
    width: 150,
    editable: true,
  },
  {
    field: "BankName",
    headerName: "Bank Name",
    type: "number",
    width: 130,
    editable: true,
  },

  {
    field: "Branch",
    headerName: "Branch",
    type: "number",
    width: 120,
    editable: true,
  },

  {
    field: "IFSCCode",
    headerName: "IFSC Code",
    type: "number",
    width: 110,
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
    AccountType: "Current",
    HolderName: "Sai Rebba",
    AccountNo: "11120124855145",
    BankName: "ICICI BANK*",
    Branch: "Gachibowli",
    IFSCCode: "ICICI01145",
    Status: "In-Active",
    Actions: "View",
  },

  {
    id: 2,
    AccountType: "Current",
    HolderName: "Sai Rebba",
    AccountNo: "11120124855145",
    BankName: "ICICI BANK*",
    Branch: "Gachibowli",
    IFSCCode: "ICICI01145",
    Status: "In-Active",
    Actions: "View",
  },
  {
    id: 3,
    AccountType: "Current",
    HolderName: "Sai Rebba",
    AccountNo: "11120124855145",
    BankName: "ICICI BANK*",
    Branch: "Gachibowli",
    IFSCCode: "ICICI01145",
    Status: "In-Active",
    Actions: "View",
  },
  {
    id: 4,
    AccountType: "Current",
    HolderName: "Sai Rebba",
    AccountNo: "11120124855145",
    BankName: "ICICI BANK*",
    Branch: "Gachibowli",
    IFSCCode: "ICICI01145",
    Status: "In-Active",
    Actions: "View",
  },

  {
    id: 5,
    AccountType: "Current",
    HolderName: "Sai Rebba",
    AccountNo: "11120124855145",
    BankName: "ICICI BANK*",
    Branch: "Gachibowli",
    IFSCCode: "ICICI01145",
    Status: "In-Active",
    Actions: "View",
  },
  {
    id: 6,
    AccountType: "Current",
    HolderName: "Sai Rebba",
    AccountNo: "11120124855145",
    BankName: "ICICI BANK*",
    Branch: "Gachibowli",
    IFSCCode: "ICICI01145",
    Status: "Active",
    Actions: "View",
  },
];

function BankAccountdetails() {
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
function BankAccount() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Bank Account Details</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <BankAccountdetails />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BankAccount;
