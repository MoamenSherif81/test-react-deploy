import { Fragment } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MainLayout from "./layouts/MainLayout";
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {

  return (
    <Fragment>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
