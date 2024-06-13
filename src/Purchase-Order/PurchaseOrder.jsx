import React, { useState } from "react";
import AddPurchaseItem from "./AddPurchaseItem";
import AddOrEdit from "./AddOrEdit";

const PurchaseOrder = ({ onPurchaseData }) => {
  const [customer, setCustomer] = useState("Customer 1");
  const [invoice, setInvoice] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Draft");
  const [showAddOrEdit, setShowAddOrEdit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { customer, invoice, date, status };
    onPurchaseData(data);
    setCustomer("Customer 1");
    setDate("");
    setInvoice("");
    setStatus("Draft");
  };

  const handleAddItemClick = () => {
    setShowAddOrEdit(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="salesorder-form">
        <h3 className="salesorder-form-heading">Add / Edit Purchase Order</h3>
        <label htmlFor="customer" className="customer-salesorder_label">
          Customer:
        </label>
        <select
          id="customer"
          value={customer}
          onChange={(event) => setCustomer(event.target.value)}
          className="customer-salesorder_input"
        >
          <option value="Customer 1">Test</option>
          <option value="Customer 2">Admin</option>
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
        <button type="button" onClick={handleAddItemClick} className="add-item">
          Add Item
        </button>
        {showAddOrEdit ? <AddOrEdit onPurchaseData={onPurchaseData} /> : null}
        <AddPurchaseItem />
        <div className="savebotton">
          <button onClick={() => handleDelete(index)} className="btns">
            Save
          </button>
          <button onClick={() => handleDelete(index)} className="btns">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default PurchaseOrder;
