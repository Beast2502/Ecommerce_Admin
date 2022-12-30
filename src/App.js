import "./App.css";

import Header from "./view/Header/header";
import DashBorad from "./view/Dashboard/dashBoard";
import SideBar from "./view/SideBar/sideBar";
import AddCategory from "./view/AddCategory/addCategory";
import AddProduct from "./view/AddProduct/addProduct";
import Orders from "./view/Orders/orders";
import Users from "./view/Users/users";
import Banner from "./view/Banner/banner";

// Routes
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<DashBorad />} />
          <Route exact path="/banners" element={<Banner />} />
          <Route exact path="/category" element={<AddCategory />} />
          <Route exact path="/products" element={<AddProduct />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
