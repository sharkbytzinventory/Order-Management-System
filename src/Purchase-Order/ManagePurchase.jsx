import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PurchaseOrder from "./PurchaseOrder";
import { BiEdit, BiTrash } from "react-icons/bi";

const initialSuppliers = [
  {
    id: 1,
    name: "shark bites",
    email: "supplier1@example.com",
    phone: "123-456-7890",
    area: "Area 1",
    status: "Active",
  },
  {
    id: 2,
    name: "pm traders",
    email: "supplier2@example.com",
    phone: "234-567-8901",
    area: "Area 2",
    status: "Inactive",
  },
];

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
`;

const StyledModel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const HeadTr = styled(Tr)`
  background-color: #5c9c5e;
  color: white;
`;

function ManagePurchase() {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [purchaseData, setPurchaseData] = useState([
    {
      supplier: "shark bites",
      invoice: "IN0001 1",
      date: "08/05/2024",
      total: "24000",
      status: "active"
    },
    {
      supplier: "pm traders",
      invoice: "IN0001 2",
      date: "09/05/2024",
      total: "550000",
      status: "inactive"
    }
  ]);
  const [selectedPurchaseIndex, setSelectedPurchaseIndex] = useState(null);

  useEffect(() => {
    const storedPurchaseData = localStorage.getItem("purchaseData");
    if (storedPurchaseData) {
      setPurchaseData(JSON.parse(storedPurchaseData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("purchaseData", JSON.stringify(purchaseData));
  }, [purchaseData]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
  };

  const handlePurchaseOrder = () => {
    setShowModal(true);
  };

  const handlePurchaseData = (data) => {
    if (selectedPurchaseIndex !== null) {
      const updatedPurchaseData = [...purchaseData];
      updatedPurchaseData[selectedPurchaseIndex] = data;
      setPurchaseData(updatedPurchaseData);
      setSelectedPurchaseIndex(null);
    } else {
        setPurchaseData([...purchaseData, data]);
    }
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setSelectedPurchaseIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedPurchaseData = [...purchaseData];
    updatedPurchaseData.splice(index, 1);
    setPurchaseData(updatedPurchaseData);
  };

  return (
    <>
      <h1>Manage Purchases</h1>
      <StyledDiv>
        <StyledSelect>
          {suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.name}>
              {supplier.name}
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
          <StyledButton onClick={handlePurchaseOrder}>Add Purchase Order</StyledButton>
        </ButtonContainer>
      </StyledDiv>
      <div>
        <h3>Purchase List:</h3>
        <Table>
          <thead>
            <HeadTr>
              <Th>Supplier Name</Th>
              <Th>Invoice No</Th>
              <Th>Date</Th>
              <Th>Total</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </HeadTr>
          </thead>
          <tbody>
            {purchaseData.map((purchase, index) => (
              <Tr key={index}>
                <Td>{purchase.supplier}</Td>
                <Td>{purchase.invoice}</Td>
                <Td>{purchase.date}</Td>
                <Td>{purchase.total}</Td>
                <Td>{purchase.status}</Td>
                <Td>
                  <button onClick={() => handleEdit(index)} className="btns">
                    <BiEdit />
                  </button>
                  <button onClick={() => handleDelete(index)} className="btns">
                    <BiTrash />
                  </button>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </div>
      {showModal && (
        <StyledModel>
          <Modal>
            <PurchaseOrder
              onPurchaseData={handlePurchaseData}
              purchaseData={
                selectedPurchaseIndex !== null ? purchaseData[selectedPurchaseIndex] : null
              }
            />
          </Modal>
        </StyledModel>
      )}
    </>
  );
}

export default ManagePurchase;
