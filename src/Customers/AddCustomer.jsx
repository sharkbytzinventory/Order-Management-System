import { useState } from "react";
import "./Customer.css";
import { useNavigate } from "react-router-dom";

function AddCustomer({customers, setCustomers}) {

 const initialData = {
      name: "",
      email: "",
      phone: "",
      address: "",
      area: "",
      city: "",
      status: "",
 }
  const [formData, setFormData] = useState({...initialData});
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, formData]);
    // Reset form data after submission
    navigate("/customer")
    setFormData({...initialData});
    console.log(formData);
  };

  const handleCancel = (e) => {
    e.preventDefault(); // Stop form submission
    // Reset form data here if needed
    setFormData({...initialData});
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="customer-form">
        <h3 className="form-heading">Add/Edit Customer</h3>
        <label className="customer-form__label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="customer-form__input"
          />
        </label>
        <label className="customer-form__label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="customer-form__input"
          />
        </label>
        <label className="customer-form__label">
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="customer-form__input"
          />
        </label>
        <label className="customer-form__label">
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="customer-form__input"
          />
        </label>
        <label className="customer-form__label">
          Area:
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleInputChange}
            className="customer-form__input"
          />
        </label>
        <label className="customer-form__label">
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="customer-form__input"
          />
        </label>
        <label className="customer-form__label">
          Status:
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="customer-form__input"
          />
        </label>
        <div className="customer-form__button-container">
          <button type="submit" value="submit" className="customer-form__button">
            Save
          </button>
          <button onClick={handleCancel} className="customer-form__button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;