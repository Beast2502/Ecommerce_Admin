import "./App.css";

import Header from "./view/Header/header";
import DashBoradView from "./view/Dashboard/dashBoard";
import SideBarView from "./view/SideBar/sideBar";
import AddCategoryView from "./view/AddCategory/addCategory";
import AddProductView from "./view/AddProduct/addProduct";
import OrdersView from "./view/Orders/orders";
import UsersView from "./view/Users/users";
import BannerView from "./view/Banner/banner";

// Routes
import { Route, Routes } from "react-router-dom";
import AddCatModal from "./view/AddCategory/addCatModal";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SideBarView />
        <Routes>
          <Route exact path="/" element={<DashBoradView />} />
          <Route exact path="/banners" element={<BannerView />} />
          <Route exact path="/category" element={<AddCategoryView />} />
          <Route exact path="/addcat" element={<AddCatModal />} />
          <Route exact path="/products" element={<AddProductView />} />          
          <Route exact path="/orders" element={<OrdersView />} />
          <Route exact path="/users" element={<UsersView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
