import React from "react";
import syled from "styled-components";
import Banner1 from "../../Assets/Banner1.png";
import Banner2 from "../../Assets/Banner2.png";
import Banner3 from "../../Assets/Banner3.png";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import "./BannersOffers.css";

const AddButton = styled.div`
  background-color: #6a7600;
  color: #fff;
  padding: 0.5em;
  margin: 0 0.5em;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 90px;
  text-align: center;
`;

const AddBanner = styled.div`
  background-color: #6a7600;
  color: #fff;
  padding: 0.5em;
  margin: 0 0.5em;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  text-align: center;
  display: flex;
  justify-content-: flex-end;
  align-items: center;
`;

const DeleteButton = styled.div`
  background-color: #ff0000;
  color: #fff;
  padding: 0.5em;
  margin: 0 0.5em;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  text-align: center;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddBanner1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddButton onClick={handleOpen}>
        +Add Banner
      </AddButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Banner
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form className="row g-3">
              <div className="col-lg-12 mb-2 col-xs-12">
                <label htmlFor="inputNanme4" className="form-label small">
                  Banner Small Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputNanme4"
                  placeholder="explore our new products"
                />
              </div>

              <div className="col-lg-12 mb-2 col-xs-12">
                <label htmlFor="inputNanme4" className="form-label small">
                  Banner Main Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputNanme4"
                  placeholder="Biggest Discount are live now upto 50%"
                />
              </div>
              <div className="col-lg-12 mb-2 col-xs-12">
                <label htmlFor="inputEmail4" className="form-label small">
                  Product Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Ex:Havells Ceiling Fans"
                />
              </div>
              <div className="col-lg-12 mb-2 col-xs-12">
                <label htmlFor="inputPassword4" className="form-label small">
                  Product Offer(%)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Ex:50%"
                />
              </div>

              <div className="col-lg-12 mb-2 col-xs-12">
                <label htmlFor="inputAddress" className="form-label small">
                  Upload Product Image
                </label>
                <input type="file" className="form-control" id="fileId" />
              </div>

              <div className="col-lg-12 mb-2 col-xs-12">
                <label htmlFor="inputAddress" className="form-label small">
                  Enter Product Description
                </label>
                <div className="col-sm-12">
                  <textarea className="form-control" style={{ height: 100 }} />
                </div>
              </div>
            </form>

            <AddButton>Add Banner</AddButton>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

function ViewBanner() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <RemoveRedEyeOutlinedIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Banner
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src={Banner1} alt="banner1" className="img-fluid" />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

function DeleteBanner() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <DeleteOutlineOutlinedIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Remove Banner
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h4 className="font-weight-bold text-center mx-auto w-100">
              Are you sure want to delete the banner?
            </h4>
          </Typography>

          <div className="d-flex justify-content-between align-items-center">
            <AddButton>YES</AddButton>
            <DeleteButton>NO</DeleteButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

function BannersOffers() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Banners & Offers</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <div className="d-flex justify-content-end align-items-center">
                  <AddBanner><AddBanner1/></AddBanner>
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
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-content-center">
                              <h5 className="card-title">Banner 1</h5>

                              <div className="shpw d-flex justify-content-start align-items-center">
                                <ViewBanner className="colorgreen" />
                                <DeleteBanner className="colorgreen" />
                              </div>
                            </div>
                            <a href="assets/img/Banner1.png">
                              <img src={Banner1} className="img-fluid" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-content-center">
                              <h5 className="card-title">Banner 2</h5>

                              <div className="shpw d-flex justify-content-start align-items-center">
                                <ViewBanner className="colorgreen" />
                                <DeleteBanner className="colorgreen" />
                              </div>
                            </div>
                            <a href="assets/img/Banner2.png">
                              <img src={Banner2} className="img-fluid" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-content-center">
                              <h5 className="card-title">Banner 3</h5>

                              <div className="shpw d-flex justify-content-start align-items-center">
                                <ViewBanner className="colorgreen" />
                                <DeleteBanner className="colorgreen" />
                              </div>
                            </div>
                            <a href="assets/img/Banner3.png">
                              <img src={Banner3} className="img-fluid" />
                            </a>
                          </div>
                        </div>
                      </div>
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

export default BannersOffers;
