import React, { useState } from "react";

const AddOrEdit = ({ onPurchaseData }) => {
  const [customer, setCustomer] = useState("Product 1");
  const [availableQty, setAvailableQty] = useState("");
  const [qtyAllocated, setQtyAllocated] = useState("");
  const [remainingQty, setRemainingQty] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { customer, availableQty, qtyAllocated, remainingQty, items };
    onPurchaseData(data);
    setCustomer("Product 1");
    setAvailableQty("");
    setQtyAllocated("");
    setRemainingQty("");
    setItems([]);
  };

  const handleAddSaleItem = () => {
    const newItem = {
      item: customer,
      availableQty,
      qtyAllocated,
      remainingQty,
    };
    setItems([...items, newItem]);
    setAvailableQty("");
    setQtyAllocated("");
    setRemainingQty("");
  };

  const handleCancel = () => {
    setCustomer("Product 1");
    setAvailableQty("");
    setQtyAllocated("");
    setRemainingQty("");
    setItems([]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="salesorder-form">
        <h3 className="salesorder-form-heading">Add / Edit Item</h3>
        <label htmlFor="customer" className="customer-salesorder_label">
          Item
        </label>
        <select
          id="customer"
          value={customer}
          onChange={(event) => setCustomer(event.target.value)}
          className="customer-salesorder_input"
        >
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
          <option value="Product 3">Product 3</option>
        </select>
        <label htmlFor="availableQty" className="availableQty-salesorder_label">
          Available Qty
        </label>
        <input
          type="number"
          id="availableQty"
          value={availableQty}
          onChange={(event) => setAvailableQty(event.target.value)}
          className="availableQty-salesorder_input"
        />
        <label htmlFor="qtyAllocated" className="qtyAllocated-salesorder_label">
          Qty Allocated
        </label>
        <input
          type="number"
          id="qtyAllocated"
          value={qtyAllocated}
          onChange={(event) => setQtyAllocated(event.target.value)}
          className="qtyAllocated-salesorder_input"
        />
        <label htmlFor="remainingQty" className="remainingQty-salesorder_label">
          Remaining Qty
        </label>
        <input
          type="number"
          id="remainingQty"
          value={remainingQty}
          onChange={(event) => setRemainingQty(event.target.value)}
          className="remainingQty-salesorder_input"
        />
        <div className="buttons-container">
          <button type="button" onClick={handleAddSaleItem} className="add-item-button">Add Item</button>
          <button type="submit" className="save-button">Save</button>
          <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
        </div>
      </form>
    </>
  );
};

export default AddOrEdit;
