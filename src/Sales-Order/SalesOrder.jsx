import React, { useState } from "react";
import "./salesorder.css";
import AddSalesItem from "./AddSalesItem";


const SalesOrder = ({ onSalesData }) => {
  const [customer, setCustomer] = useState("Customer 1");
  const [invoice, setInvoice] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Draft");
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState("");
  const [unitCost, setUnitCost] = useState("");
  const [tax, setTax] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { customer, invoice, date, status, items };
    onSalesData(data);
    setCustomer("Customer 1");
    setDate("");
    setInvoice("");
    setStatus("Draft");
    setItems([]);
  };

  const handleAddSaleItem = () => {
    const newItem = {
      item: itemName,
      qty: qty,
      unitCost: unitCost,
      tax: tax,
      purchasePrice: purchasePrice,
    };
    setItems([...items, newItem]);
    setItemName("");
    setQty("");
    setUnitCost("");
    setTax("");
    setPurchasePrice("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="salesorder-form">
        <h3 className="salesorder-form-heading">Add / Edit Sales Order</h3>
        <label htmlFor="customer" className="customer-salesorder_label">
          Customer:
        </label>
        <select
          id="customer"
          value={customer}
          onChange={(event) => setCustomer(event.target.value)}
          className="customer-salesorder_input"
        >
          <option value="Customer 1">Customer 1</option>
          <option value="Customer 2">Customer 2</option>
          <option value="Customer 3">Customer 3</option>
        </select>
        <label htmlFor="date" className="date-salesorder_label">
          Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="date-salesorder_input"
        />
        <label htmlFor="name" className="invoice-salesorder_label">
          Invoice Number:
        </label>
        <input
          type="text"
          id="name"
          value={invoice}
          onChange={(event) => setInvoice(event.target.value)}
          className="invoice-salesorder_input"
        />
        <label htmlFor="status" className="status-salesorder_label">
          Status:
        </label>
        <select
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          className="status-salesorder_input"
        >
          <option value="Draft">Draft</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          onClick={handleAddSaleItem}
          className="add-item"
          htmlFor="Add=Item"
        >
          Add Item
        </button>
      </form>

      <AddSalesItem/>

      <button>Save</button>
      <button>cancel</button>

     
    </>
  );
};

export default SalesOrder;
