import "./App.css";

// Views
import LoginView from "./view/Login/login";
import Header from "./view/Header/header";
import DashBoardView from "./view/Dashboard/dashBoard";
import SideBarView from "./view/SideBar/sideBar";
import AddCategoryView from "./view/AddCategory/addCategory";
import AddProductView from "./view/AddProduct/addProduct";
import OrdersView from "./view/Orders/orders";
import UsersView from "./view/Users/users";
import BannerView from "./view/Banner/banner";
import AddDetails from "./view/AddProduct/addDetails";
import AddUser from "./view/Users/addNewUser";

// Routes
import { Route, Routes } from "react-router-dom";

// Redux
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      {props.isActive ? (
        <>
          <Header />
          <div className="container">
            <SideBarView />
            <Routes>
              <Route exact path="/" element={<DashBoardView />} />
              <Route exact path="/banners" element={<BannerView />} />
              <Route exact path="/category" element={<AddCategoryView />} />
              <Route exact path="/products" element={<AddProductView />} />
              <Route
                exact
                path="/products/addDetails"
                element={<AddDetails />}
              />

              <Route exact path="/orders" element={<OrdersView />} />
              <Route exact path="/users" element={<UsersView />} />
              <Route exact path="/users/addUsers" element={<AddUser />} />
            </Routes>
          </div>
        </>
      ) : (
        <LoginView />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isActive: state.isActive,
  };
};

export default connect(mapStateToProps, null)(App);
