import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SalesOrder from "./SalesOrder";
import { BiEdit, BiTrash } from "react-icons/bi";

const initialCustomers = [
  {
    id: 1,
    name: "Test",
    email: "customer1@example.com",
    phone: "123-456-7890",
    area: "Area 1",
    status: "Active",
  },
  {
    id: 2,
    name: "Admin",
    email: "customer2@example.com",
    phone: "234-567-8901",
    area: "Area 2",
    status: "Inactive",
  },
];

const initialInvoices = ["IN0001", "	IN0002"];

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

function Sales() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [invoices, setInvoices] = useState(initialInvoices);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [salesData, setSalesData] = useState([
    {
      customer: "Test",
      invoice: "IN0001 1",
      date: "08/05/2024",
      total: "24000",
      status: "active",
    },
    {
      customer: "admin",
      invoice: "IN0001 2",
      date: "09/05/2024",
      total: "550000",
      status: "inactive",
    },
  ]);
  const [selectedSaleIndex, setSelectedSaleIndex] = useState(null);
  const [newCustomer, setNewCustomer] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    area: "",
    status: "Active",
  });

  const [newInvoice, setNewInvoice] = useState("");

  useEffect(() => {
    const storedSalesData = localStorage.getItem("salesData");
    if (storedSalesData) {
      setSalesData(JSON.parse(storedSalesData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("salesData", JSON.stringify(salesData));
  }, [salesData]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
  };

  const handleSaleOrder = () => {
    setSelectedSaleIndex(null);
    setShowModal(true);
  };

  const handleSalesData = (data) => {
    if (selectedSaleIndex !== null) {
      const updatedSalesData = [...salesData];
      updatedSalesData[selectedSaleIndex] = data;
      setSalesData(updatedSalesData);
      setSelectedSaleIndex(null);
    } else {
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

  const handleNewCustomerChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = () => {
    setCustomers([...customers, { ...newCustomer, id: customers.length + 1 }]);
    setNewCustomer({
      id: "",
      name: "",
      email: "",
      phone: "",
      area: "",
      status: "Active",
    });
  };

  const addCustomer = (customerName) => {
    const newCustomer = {
      id: customers.length + 1,
      name: customerName,
      email: "",
      phone: "",
      area: "",
      status: "Active",
    };
    setCustomers([...customers, newCustomer]);
  };

  const addInvoice = (invoiceNumber) => {
    setInvoices([...invoices, invoiceNumber]);
  };

  return (
    <>
      <h1>Manage Customer PO</h1>
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
          {invoices.map((invoice, index) => (
            <option key={index} value={invoice}>
              {invoice}
            </option>
          ))}
        </StyledSelect>
        <ButtonContainer>
          <StyledButton onClick={handleSearch}>Search</StyledButton>
          <StyledButton onClick={handleSaleOrder}>Add Customer PO</StyledButton>
        </ButtonContainer>
      </StyledDiv>
      <div>
        <h3>Customer PO List:</h3>
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
            {salesData.map((sale, index) => (
              <Tr key={index}>
                <Td>{sale.customer}</Td>
                <Td>{sale.invoice}</Td>
                <Td>{sale.date}</Td>
                <Td>{sale.total}</Td>
                <Td>{sale.status}</Td>
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
            <SalesOrder
              onSalesData={handleSalesData}
              addCustomer={addCustomer}
              addInvoice={addInvoice}
              saleData={
                selectedSaleIndex !== null ? salesData[selectedSaleIndex] : null
              }
            />
          </Modal>
        </StyledModel>
      )}
    </>
  );
}

export default Sales;
