import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import AllProducts from "./components/AllProducts/AllProducts";
import BannersOffers from "./components/BannersOffers/BannersOffers";
import Customers from "./components/Customers/Customers";
import Notifications from "./components/Notifications/Notifications";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BankAccount from "./components/BankAccount/BankAccount";
import Batteries from "./components/Batteries/Batteries";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
      <Header />
        <Menu />
          <Routes>
            <Route exact path="/" element={<BannersOffers />} />
            <Route exact path="/allproducts" element={<AllProducts />} />
            <Route exact path="/customers" element={<Customers />} />
            <Route exact path="/notifications" element={<Notifications />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/bankaccount" element={<BankAccount />} />
            <Route exact path="/batteries" element={<Batteries />} />

            
          </Routes>
      </Router>

     
      
      {/* <Dashboard /> */}
      {/* <AllProducts /> */}
      {/* <Notifications/> */}
      {/* <Customers/> */}
      {/* <BannersOffers /> */}
      {/* <Login/> */}
      {/* <Register /> */}
      <Footer />
    </div>
  );
}

export default App;
