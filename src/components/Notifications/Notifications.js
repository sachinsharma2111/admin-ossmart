import React, { useState } from "react";
import syled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import "./Notifications.css";
import Box from "@mui/material/Box";
import Item from "../../Assets/smartchart.jpg";
import styled from "styled-components";
import { Details } from "@mui/icons-material";

const NotificationsData = [
  {
    id: 1,
    Image: "sfksjdfl",
    heading: "Product name 1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    button: "View Details",
    date: "Received on: 10, Mon 2023",
  },
  {
    id: 2,
    Image: "sfksjdfl",
    heading: "Product name 2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    button: "View Details",
    date: "Received on: 15, Mon 2023",
  },
  {
    id: 3,
    Image: "sfksjdfl",
    heading: "Product name 3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    button: "View Details",
    date: "Received on: 20, Mon 2023",
  },
  {
    id: 4,
    Image: "sfksjdfl",
    heading: "Product name 4",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    button: "View Details",
    date: "Received on: 24, Mon 2023",
  },

  {
    id: 5,
    Image: "sfksjdfl",
    heading: "Product name 4",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    button: "View Details",
    date: "Received on: 30, Mon 2023",
  },
];

function Notifications() {
  const [detail, setDetails] = useState(NotificationsData);

  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Notifications</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {detail.map((detail) => {
                return (
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 class="card-title mb-0">{detail.heading}</h6>
                          <p className="small mb-0 text-secondary">
                            {Details.date}
                          </p>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="small">{detail.content}</p>
                      </div>

                      <div className="card-footer px-1 m-0">
                        <p className="mb-0">{detail.button}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Notifications;
