import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SalesOrder from "../Sales-Order/SalesOrder";
import PurchaseOrder from './PurchaseOrder'


function isDateString(dateString) {
  return !isNaN(Date.parse(dateString));
}
const StyledDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const StyledSelect = styled.select`
  width: 200px;
  height: 40px;
  background-color: white;
  color: #333;
  padding-left: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledLabel = styled.label`
  font-size: 16px;
  margin: 10px;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 40px;
  background-color: white;
  color: #333;
  padding-left: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 15px;
`;

const StyledButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: #4e647b;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

const

  &:focus {
    outline: none;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

function ManagePurchase() {

  function handleDateChange(event) {
    const selectedDate = event.target.value;
    if (isDateString(selectedDate)) {
      console.log("Valid date:", selectedDate);
    } else {
      // Add new sale data
      setSalesData([...salesData, data]);
    }
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setSelectedSaleIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedSalesData = [...salesData];
    updatedSalesData.splice(index, 1);
    setSalesData(updatedSalesData);
  };

  return (
    <>
      <h1>Manage Purchase</h1>
      <StyledDiv>
        <StyledSelect>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.name}>
              {customer.name}
            </option>
          ))}
        </StyledSelect>
        <StyledLabel htmlFor="orderDate">Order Date:</StyledLabel>
        <StyledInput
          type="date"
          id="orderDate"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <StyledSelect>
          <option>IN0001 1</option>
          <option>IN0001 2</option>
          <option>IN0001 3</option>
        </StyledSelect>
        <ButtonContainer>
          <StyledButton onClick={handleSearch}>Search</StyledButton>
          <StyledButton onClick={handleSaleOrder}>Add Purchase Order</StyledButton>
        </ButtonContainer>
      </StyledDiv>
      <div>
        <h3>Purchase List:</h3>
        <Table>
          <thead>
            <HeadTr>
              <Th>Customer Name</Th>
              <Th>Invoice No</Th>
              <Th>Date</Th>
              <Th>Total</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </HeadTr>
          </thead>
          <tbody>
              <Tr>
              <Td>Test</Td>
              <Td>0003</Td>
              <Td>08/05/2024</Td>
              <Td>24000</Td>
              <Td>active</Td>
              <Td>
                <Td>Edit</Td>
                <Td>Delete</Td>
              </Td>
            </Tr>
            <Tr>
              <Td>admin</Td>
              <Td>0008</Td>
              <Td>09/05/2024</Td>
              <Td>550000</Td>
              <Td>inactive</Td>
              <Td>
                <Td>Edit</Td>
                <Td>Delete</Td>
              </Td>
            </Tr>
            {salesData.map((sale, index) => (
              <Tr key={index}>
                <Td>{sale.customer}</Td>
                <Td>{sale.invoice}</Td>
                <Td>{sale.date}</Td>
                <Td>{sale.total}</Td>
                <Td>{sale.status}</Td>
                <Td>
                  <button className="btns" onClick={() => handleEdit(index)}>Edit </button>
                  <button className="btns" onClick={() => handleDelete(index)}>Delete</button>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </div>
      {showModal && (
        <StyledModel>
          <Modal>
            <PurchaseOrder onSalesData={handleSalesData} saleData={selectedSaleIndex !== null ? salesData[selectedSaleIndex] : null} />
          </Modal>
        </StyledModel>

      )}
    </>
  );
}

export default ManagePurchase;

