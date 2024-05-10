import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Header/Header";
import Login from "./Login-Form/Login";
import Signin from "./Login-Form/Signin";

import ForgotPassword from "./Login-Form/ForgotPassword";
import ApplayOut from "./pages/AppLayOut";
import Dashboard from "./Dashboard/Dashboard";
import ManageCustomer from "./Customers/ManageCustomer";
import ManageSuppliers from "./Suppliers/ManageSuppliers";
import ManageItem from "./Item-Master/ManageItem";
import Sales from "./Sales-Order/Sales";
import ManagePurchase from "./Purchase-Order/ManagePurchase";
import AddCustomer from "./AddCustomer";
import GlobalStyle from "./GlobalStyled";
import ItemPrice from "./Item-Master/ItemPrice";
import ManageItemStock from "./ItemStockMaster/ManageItemStock";
import EditItemPrice from "./ItemStockMaster/EditItemPrice";
import ItemStockDetail from "./ItemStockMaster/ItemStockDetail";


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          
          <Route path="/" exact element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot" element={<ForgotPassword />} />        
        </Routes>
        <Routes >
        <Route path="/" exact element={<ApplayOut />}>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="customer" element={<ManageCustomer />} />
          <Route path="suppliers" element={<ManageSuppliers />} />
          <Route path="items" element={<ManageItem />} />
          <Route path="sales" element={<Sales />} />
          <Route path="purchaseorder" element={<ManagePurchase />} />
          <Route path="addcustomer" element={<AddCustomer />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
