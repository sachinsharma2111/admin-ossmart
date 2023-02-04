import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import Item from '../../Assets/smartchart.jpg';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import BatteriesTable from '../../components/Batteries/Batteries';
import BulbsTable from '../../components/Bulbs/Bulbs';
import CookersTable from '../../components/Cookers/Cookers';
import FansTable from '../../components/Fans/Fans';
import InvertersTable from '../../components/Inverters/Inverters';
import IronBoxesTable from '../../components/IronBoxes/IronBoxes';
import MixerGrinderTable from '../../components/MixerGrinders/MixerGrinder';
import SwitchesTable from '../../components/Switches/Switches';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function AddProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddButton onClick={handleOpen}>+ Add Product</AddButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <>{ /* Vertical Form */ }
                            <form className="row g-3">
                            <div className="col-lg-6 mb-3 col-xs-12">
                                <label htmlFor="inputNanme4" className="form-label small">Product ID</label>
                                <input type="text" className="form-control" id="inputNanme4" placeholder="#1234568" />
                              </div>  


                            <div className="col-lg-6 mb-3 col-xs-12">
                                <label htmlFor="inputAddress" className="form-label small">Upload Product Image</label>
                                <input type="file" className="form-control" id="fileId" />
                              </div>


                              

                              <div className="col-lg-6 mb-3 col-xs-12">
                                <label htmlFor="inputEmail4" className="form-label small">Product Name</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Ex:Havells Cookers" />
                              </div>
                              <div className="col-lg-6 mb-3 col-xs-12">
                                <label htmlFor="inputPassword4" className="form-label small">Type</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Ex: Home Needs" />
                              </div>
                              <div className="col-lg-6 mb-3 col-xs-12">
                                <label htmlFor="inputAddress" className="form-label small">Price(₹)</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="₹2500.00" />
                              </div>

                              <div className="col-lg-6 mb-3 col-xs-12">
                                <label htmlFor="inputAddress" className="form-label small">Actual Price(₹)</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="₹3500.00" />
                              </div>

                              <div className="col-lg-6 mb-3 col-xs-12">
                                <label htmlFor="inputAddress" className="form-label small">Offer(%)</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="20% off" />
                              </div>

                              <div className="col-lg-6 mb-3 col-xs-12">
                                <label htmlFor="inputAddress" className="form-label small">Rating(*)</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="4.5 Rating" />
                              </div>

                             

                              <div className="col-lg-12 mb-3 col-xs-12">
                                <label htmlFor="inputAddress" className="form-label small">Enter Product Description</label>
                                <div className="col-sm-12">
                                  <textarea className="form-control" style={{ height: 100 }} />
                                </div>
                              </div>

                              <AddButton>Add Product</AddButton>

                            </form>
                            { /* Vertical Form */ }</>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'ProductImage',
    headerName: 'Product Image',
    width: 150,
    editable: false,
  },
  {
    field: 'ProductName',
    headerName: 'Product Name',
    width: 250,
    editable: true,
  },
  {
    field: 'ProductDescription',
    headerName: 'Product Description',
    width: 350,
    editable: true,
  },
  {
    field: 'Type',
    headerName: 'Type',
    type: 'number',
    width: 120,
    editable: true,
  },

  {
    field: 'Price',
    headerName: 'Price(₹)',
    type: 'number',
    width: 110,
    editable: true,
  },


  {
    field: 'ActualPrice',
    headerName: 'Actual Price (₹)',
    type: 'number',
    width: 110,
    editable: true,
  },

  {
    field: 'Offer',
    headerName: 'Offer(%)',
    type: 'number',
    width: 110,
    editable: true,
  },

  {
    field: 'Rating',
    headerName: 'Rating',
    type: 'number',
    width: 110,
    editable: true,
  },

  {
    field: 'Actions',
    headerName: 'Actions',
    type: 'number',
    width: 110,
    editable: true,
  },
  
];

const rows = [
  {
    id: 1, 
    ProductImage: {Item}, 
    ProductName: 'Macook 1.6l 600-Watts', 
    ProductDescription: 'Worth it at this price bass is so deep', 
    Type: 'Home Needs',
    Price: '₹2000',
    ActualPrice: '₹3000',
    Offer: '20%',
    Rating: 5,
    Actions: 'View',
  },

  {
    id: 2, 
    ProductImage: {Item}, 
    ProductName: 'Macook 1.6l 600-Watts', 
    ProductDescription: 'Worth it at this price bass is so deep', 
    Type: 'Home Needs',
    Price: '₹2000',
    ActualPrice: '₹3000',
    Offer: '20%',
    Rating: 5,
    Actions: 'View',
  },
  {
    id: 3, 
    ProductImage: {Item}, 
    ProductName: 'Macook 1.6l 600-Watts', 
    ProductDescription: 'Worth it at this price bass is so deep', 
    Type: 'Home Needs',
    Price: '₹2000',
    ActualPrice: '₹3000',
    Offer: '20%',
    Rating: 5,
    Actions: 'View',
  },
  {
    id: 4, 
    ProductImage: {Item}, 
    ProductName: 'Macook 1.6l 600-Watts', 
    ProductDescription: 'Worth it at this price bass is so deep', 
    Type: 'Home Needs',
    Price: '₹2000',
    ActualPrice: '₹3000',
    Offer: '20%',
    Rating: 5,
    Actions: 'View',
  },
  {
    id: 5, 
    ProductImage: {Item}, 
    ProductName: 'Macook 1.6l 600-Watts', 
    ProductDescription: 'Worth it at this price bass is so deep', 
    Type: 'Home Needs',
    Price: '₹2000',
    ActualPrice: '₹3000',
    Offer: '20%',
    Rating: 5,
    Actions: 'View',
  },
]; 


function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

const AddButton = styled.div`
  background-color: #6a7600;
  color: #fff;
  padding: 0.5em;
  margin: 0 0.5em;
  font-size: 12px;
  border-radius: 5px;
  cursor:pointer;
`;

const Export = styled.div`
  background-color: #6a7600;
  color: #fff;
  padding: 0.5em;
  margin: 0 0.5em;
  font-size: 12px;
  border-radius: 5px;
  cursor:pointer;
`;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All Products" {...a11yProps(0)} />
          <Tab label="Batteries" {...a11yProps(1)} />
          <Tab label="Bulbs" {...a11yProps(2)} />
          <Tab label="Cookers" {...a11yProps(3)} />
          <Tab label="Fans" {...a11yProps(4)} />
          <Tab label="Inverters" {...a11yProps(5)} />
          <Tab label="Iron Boxes" {...a11yProps(6)} />
          <Tab label="Mixer Grinders" {...a11yProps(7)} />
          <Tab label="Switches" {...a11yProps(8)} />
          <Tab label="Other Products" {...a11yProps(9)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="mainContinet">
          <div className="row">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">All Products</h6>

                <div className="font-weight-bold d-flex">
                  <AddButton><AddProduct/></AddButton>
                  <Export>Export Data</Export>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <DataGridDemo />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="mainContinet">
          <div className="row">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">All Batteries</h6>

                <div className="font-weight-bold d-flex">
                  <AddButton><AddProduct/></AddButton>
                  <Export>Export Data</Export>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <BatteriesTable />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="mainContinet">
          <div className="row">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">All Bulbs</h6>

                <div className="font-weight-bold d-flex">
                  <AddButton><AddProduct/></AddButton>
                  <Export>Export Data</Export>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <BulbsTable />
          </div>
        </div>
      </TabPanel>

      <TabPanel value={value} index={3}>
      <div className="mainContinet">
          <div className="row">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">All Cookers</h6>

                <div className="font-weight-bold d-flex">
                  <AddButton><AddProduct/></AddButton>
                  <Export>Export Data</Export>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <CookersTable />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="mainContinet">
          <div className="row">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">All Fans</h6>

                <div className="font-weight-bold d-flex">
                  <AddButton><AddProduct/></AddButton>
                  <Export>Export Data</Export>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <FansTable />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="mainContinet">
          <div className="row">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">All Inverters</h6>

                <div className="font-weight-bold d-flex">
                  <AddButton><AddProduct/></AddButton>
                  <Export>Export Data</Export>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <InvertersTable />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className="mainContinet">
          <div className="row">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">All Iron Boxes</h6>

                <div className="font-weight-bold d-flex">
                  <AddButton><AddProduct/></AddButton>
                  <Export>Export Data</Export>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <IronBoxesTable />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <div className="mainContinet">
          <div className="row">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">All Mixer Grinders</h6>

                <div className="font-weight-bold d-flex">
                  <AddButton><AddProduct/></AddButton>
                  <Export>Export Data</Export>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <MixerGrinderTable />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <div className="mainContinet">
          <div className="row">
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">All Switches</h6>

                <div className="font-weight-bold d-flex">
                  <AddButton><AddProduct/></AddButton>
                  <Export>Export Data</Export>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <SwitchesTable />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item Three
      </TabPanel>
    </Box>
  );
}

function AllProducts() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">All Products</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">All Products</li>
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
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <BasicTabs />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AllProducts;
