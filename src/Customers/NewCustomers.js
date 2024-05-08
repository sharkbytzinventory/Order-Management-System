import React, { useState } from "react";

function NewCustomers() {
  const initialFormData = {
    customerName: "",
    code: "",
    address: "",
    taxNo: "",
    phone: "",
    country: "",
    city: "",
    email: "",
    creditPeriod: "",
    creditLimit: "",
    openingBalance: "",
    countryCode: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({ ...initialFormData });
  };

  return (
    <div className="customerpage">
      <p style={{ fontSize: "1.2rem" }}>Customer Add</p>
      <p style={{ color: "gray", fontSize: "0.9rem" }}>Create new Customer</p>

      <form className="form" onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1.38" }}>
            <label htmlFor="customerName" style={{ marginBottom: "10px" }}>
              Customer Name:
            </label>
            <br />
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              style={{
                width: "98%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>

          <div style={{ flex: ".6" }}>
            <label htmlFor="code" style={{ marginBottom: "10px" }}>
              Code
            </label>
            <br />
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ flex: "1.38" }}>
            <label htmlFor="address">Address:</label>
            <br />
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={{
                width: "98%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>
          <div style={{ flex: "0.6" }}>
            <label htmlFor="taxNo">Tax No:</label>
            <br />
            <input
              type="text"
              id="taxNo"
              name="taxNo"
              value={formData.taxNo}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.77" }}>
            <label htmlFor="phone">Phone:</label>
            <br />
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: "96%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>
          <div style={{ flex: "0.85" }}>
            <label htmlFor="country">Country: </label>
            <br />
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={{
                width: "96%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>

          <div style={{ flex: ".70" }}>
            <label htmlFor="city">City:</label>
            <br />
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>
        </div>

        <label htmlFor="text" className="additional" >Additional Field</label>

       

        <div style={{ display: "flex" }}>
          <div style={{ flex: ".655" }}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "96%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>
          <div style={{ flex: "0.725" }}>
            <label
              htmlFor="creditPeriod"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            >
              Credit Period:
            </label>
            <br />
            <input
              type="text"
              id="creditPeriod"
              name="creditPeriod"
              value={formData.creditPeriod}
              onChange={handleChange}
              style={{
                width: "96%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>
          <div style={{ flex: "0.6" }}>
            <label htmlFor="creditLimit">Credit Limit:</label>
            <br />
            <input
              type="text"
              id="creditLimit"
              name="creditLimit"
              value={formData.creditLimit}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.92" }}>
            <label htmlFor="openingBalance" style={{ marginBottom: "10px" }}>
              Opening Balance:
            </label>
            <br />
            <input
              type="text"
              id="openingBalance"
              name="openingBalance"
              value={formData.openingBalance}
              onChange={handleChange}
              style={{
                width: "96%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <br />
          </div>
          <div style={{ flex: "1.8" }}>
            <br />
            <input
              type="text"
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              style={{
                width: "10%",
                padding: ".5rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
          </div>
        </div>

        <br />

        <div>
          <button type="submit" className="submit">
            Submit
          </button>
          <button type="button" className="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewCustomers;
