import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import SidebarLayout from "./components/Layout/layout";
import BannersOffers from "./components/BannersOffers/BannersOffers";
import Customers from "./components/Customers/Customers";
import Notifications from "./components/Notifications/Notifications";
import Login from "./components/Login/Login";
import BankAccount from "./components/BankAccount/BankAccount";
import Batteries from "./components/Batteries/Batteries";
import Category from "./components/Category/Category"
import Products from "./components/Products/Products";
import UploadImages from "./components/ImagesUpload/FilePondUpload";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {

  const currentUser = localStorage.getItem("userToken");
  return (
    <div className="App">

      <Router>
          <Routes>
            { !currentUser?
              <Route exact path="login" element={<Login />} />
            :
            <Route exact path="/" element={<SidebarLayout/>}>
              <Route exact index  element={<Dashboard/>}/>
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/customers" element={<Customers />} />
              <Route exact path="/notifications" element={<Notifications />} />
              <Route exact path="/bankaccount" element={<BankAccount />} />
              <Route exact path="/batteries" element={<Batteries />} />
              <Route exact path="/bankoffers" element={<BannersOffers />} />
              <Route exact path="/category" element={<Category/>} />
              <Route exact path="/upload-images" element={<UploadImages/>} />
            </Route>
          }
          <Route path="*" element={!currentUser ? <Login /> : <Navigate to="/"/> } />,
          </Routes>
      </Router>
    </div>
  );
}

export default App;
