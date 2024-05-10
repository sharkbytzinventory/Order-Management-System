/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Customer.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
const Modal = styled.div`
  position: relative;
  z-index: 100;
  top: 5%;
  left: 30%;
  border-radius: 20px;
`;
const StyledModel = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: none;
  backdrop-filter: blur(3px);
`;

function AddCustomer({ customers, setCustomers }) {
  const initialData = {
    name: "",
    email: "",
    phone: "",
    address: "",
    area: "",
    city: "",
    status: "",
  };
  const [formData, setFormData] = useState({ ...initialData });
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, formData]);

    setFormData({ ...initialData });
    console.log(formData);
    setShowForm((show)=>!show);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormData({ ...initialData });
  };

  return (
    <div>
      {showForm && (
        <StyledModel>
          <Modal>
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
                <button
                  type="submit"
                  value="submit"
                  className="customer-form__button"
                >
                  Save
                </button>
                <button
                  onClick={()=> navigate("/customer")}
                  className="customer-form__button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </Modal>
        </StyledModel>
      )}
    </div>
  );
}

export default AddCustomer;
