import { useState } from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import AddCustomer from "./AddCustomer";

const Modal = styled.div`
  position: relative;
  z-index: 100;
  width: 400px;
  height: 630px;
  top: 5%;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  left: 40%;
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
  background-color:none;
  backdrop-filter:blur(2px);
`
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



function ManageCustomer() {
  const [customers, setCustomers] = useState([
    {
      id: "",
      name: "",
      email: "",
      phone: "",
      area: "",
      status: "",
    },
      ]);


  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);


  const handleSearch = () => {
    const filteredCustomers = customers.filter((customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );    
    setCustomers(filteredCustomers);
  };

  const handleEdit = (id) => {
    console.log("Edit customer with ID:", id);
  };

  const handleDelete = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };
  const handleAddCustomer = () => {
    setShowModal(true);
  };


  return (
    <>
      <div style={{ position: "relative", zIndex: "1000" }}>
        <h1>Manage Customers</h1>
        <StyledDiv>
          <StyledSelect
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          >
           {customers.map((customer) => ( <><option>{customer.name}Customer</option>
            <option>Customer2</option>
            <option>Customer3</option></>))}
          </StyledSelect>
          <ButtonContainer>
            <StyledButton onClick={handleSearch}>Search</StyledButton>
            <StyledButton onClick={handleAddCustomer}>
              Add Customer
            </StyledButton>
          </ButtonContainer>
        </StyledDiv>
        
        {customers.length > 0 ? (
          <div>
            <h3>Customer List:</h3>
            <Table>
              <thead>
                <HeadTr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Area</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </HeadTr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <Tr key={customer.id}>
                    <Td>{customer.name}</Td>
                    <Td>{customer.email}</Td>
                    <Td>{customer.phone}</Td>
                    <Td>{customer.area}</Td>
                    <Td>{customer.status}</Td>
                    <Td>
                      <button style={{ border: "none", outline: "none" }} onClick={() => handleEdit(customer.id)}>Edit</button> | 
                      <button style={{ border: "none", outline: "none" }} onClick={() => handleDelete(customer.id)}>Delete</button>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <div>No customers found.</div>
        )}
        {showModal && (
          <StyledModel>
          <Modal>
            <AddCustomer customers={customers} setCustomers={setCustomers}/>
          </Modal>
          </StyledModel>
        )}
      </div>
    </>
  );
}
export default ManageCustomer;
