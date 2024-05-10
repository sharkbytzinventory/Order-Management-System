import { useState } from "react";
import styled from "styled-components";

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

const StyledTbl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledTdata = styled.div`
  width: 500px;
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
  padding: 10px;
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
const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

function Dashboard() {

  const [purchase, setItem] = useState([
    { id: 1, des: "item 1", qty: 55, price: 350 },
    { id: 2, des: "item 2", qty: 88, price: 100 },
    { id: 3, des: "item 3", qty: 65, price: 50 },
    { id: 4, des: "item 4", qty: 78, price: 700 },
  ]);
  const purchaseAmount = purchase.reduce((acc, item) => acc + (item.qty * item.price), 0);

  const [sales, setSale] = useState([
    { id: 1, des: "item 1", qty: 55, price: 500 },
    { id: 2, des: "item 2", qty: 88, price: 150 },
    { id: 3, des: "item 3", qty: 65, price: 80 },
    { id: 4, des: "item 4", qty: 78, price: 900 },
  ]);
  const orderAmount = sales.reduce((acc, sale) => acc + (sale.qty * sale.price), 0);

  function handleDateChange(event) {
    const selectedDate = event.target.value;
    if (isDateString(selectedDate)) {
      console.log("Valid date:", selectedDate);
    } else {
      console.log("Invalid date:", selectedDate);
    }
  }

  return (
    <>
      <h1>Dashboard - Profit & Loss</h1>
      <StyledDiv>
        <div>
          <StyledSelect value="customer name">
            <option>Customer 1</option>
            <option>Customer 2</option>
            <option>Customer 3</option>
          </StyledSelect>
          <StyledLabel htmlFor="orderDate">Order Date:</StyledLabel>
          <StyledInput
            type="date"
            id="orderDate"
            onChange={handleDateChange}
          />{" "}
          To
          <StyledInput type="date" id="orderDate" onChange={handleDateChange} />
          <StyledSelect>
            <option>Purchase order 1</option>
            <option>Purchase order 2</option>
            <option>Purchase order 3</option>
          </StyledSelect>
        </div>
        <ButtonContainer>
          <StyledButton>Search</StyledButton>
        </ButtonContainer>
      </StyledDiv>
      <StyledTbl>
        <div>
          <h3>Sales Order Details</h3>
          <StyledTdata>
            <Table>
              <HeadTr>
                <Th>Description</Th>
                <Th>Qty</Th>
                <Th>Price</Th>
              </HeadTr>
              <tbody>
                {sales.map((sale) => (
                  <Tr key={sale.id}>
                    <Td>{sale.des}</Td>
                    <Td>{sale.qty}</Td>
                    <Td>{sale.price.toFixed(2)}</Td>
                  </Tr>
                ))}
                
              </tbody>
              <h3>Order Amount: {orderAmount.toFixed(2)}</h3>
            </Table>
          </StyledTdata>
        </div>
        <div >
          <h3>Purchase Order Details</h3>
          <StyledTdata>
            <Table>
              <thead>
                <HeadTr>
                  <Th>Description</Th>
                  <Th>Qty</Th>
                  <Th>Price</Th>
                </HeadTr>
              </thead>
              <tbody>
                {purchase.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.des}</Td>
                    <Td>{item.qty}</Td>
                    <Td>{item.price.toFixed(2)}</Td>
                  </Tr>
                ))}
      
              </tbody>
              <h3>Item Cost : {purchaseAmount.toFixed(2)}</h3>
            </Table>
          </StyledTdata>
        </div>
      </StyledTbl>
      <h2>Profit/Loss : {(orderAmount) - (purchaseAmount)}</h2>
    </>
  );
}

export default Dashboard;
