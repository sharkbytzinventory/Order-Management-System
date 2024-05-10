/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Modal = styled.div`
  position: relative;
  z-index: 100;
  top: 5%;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  left: 30%;
  border-radius: 20px;
  background-color: #f5f8f9;
`;
const StyledModel = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: none;
  backdrop-filter: blur(2px);
`;
const AddItem = ({ items, setItem }) => {
  const initialData = {
    item: "",
    supplier: "",
    category: "",
    brand: "",
    description: "",
    unit: "",
    status: "",
  };

  const [formData, setFormData] = useState({ ...initialData });
  const [formVisible, setFormVisible] = useState(true);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([...items, formData]);

    setFormData({ ...initialData });
    console.log(formData);
    setFormVisible(false);
  };

  return (
    <>
      {formVisible && (
        <StyledModel>
          <Modal>
            <form onSubmit={handleSubmit} className="customer-form">
              <h3 className="form-heading">Add / Edit Item</h3>
              <label htmlFor="name" className="customer-form__label">
                Item Name:
              </label>
              <input
                type="text"
                name="item"
                value={formData.item}
                onChange={handleInputChange}
                className="customer-form__input"
              />

              <label htmlFor="supplier" className="customer-form__label">
                Supplier:
              </label>
              <select
                name="supplier"
                value={formData.supplier}
                onChange={handleInputChange}
                className="customer-form__input"
              >
                {items.map((item) =>(<option value="supplier">{item.supplier}</option>))}
               
              </select>

              <label htmlFor="category" className="customer-form__label">
                Category:
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="customer-form__input"
              />

              <label htmlFor="brand" className="customer-form__label">
                Brand:
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="customer-form__input"
              />

              <label htmlFor="description" className="customer-form__label">
                Description:
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="customer-form__input"
              />

              <label htmlFor="unit" className="customer-form__label">
                Unit:
              </label>
              <select
                name="unit"
                value={formData.unit}
                onChange={handleInputChange}
                className="customer-form__input"
              >
                <option value="KG">KG</option>
                <option value="PCS">PCS</option>
              </select>

              <label htmlFor="status" className="customer-form__label">
                Status:
              </label>
              <input
                type="checkBox"
                name="status"
                value={formData.status}
                className="customer-form__input"
              />

              <div className="customer-form__button-container">
                <button type="submit" className="customer-form__button" >
                  Save
                </button>
                <button className="customer-form__button" onClick={() => navigate("/items")}>
                  Cancel
                </button>
              </div>
            </form>
          </Modal>
        </StyledModel>
      )}
    </>
  );
};

export default AddItem;
