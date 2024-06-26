import React, { useState } from "react";

const PurchaseOrder = ({ onPurchaseData }) => {
  const [customer, setCustomer] = useState("Customer 1");
  const [invoice, setInvoice] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Draft");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { customer, invoice, date, status };
    onPurchaseData(data);
    setCustomer("Customer 1");
    setDate("");
    setInvoice("");
    setStatus("Draft");
  };

  return (
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
      <button type="submit" className="add-item" htmlFor="Add=Item">
        Add Item
      </button>
    </form>
  );
};

export default PurchaseOrder;
