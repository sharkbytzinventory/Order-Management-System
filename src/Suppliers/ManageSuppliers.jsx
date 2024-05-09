import { useState } from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import AddSuppliers from "./AddSuppliers";


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
function ManageSupplier() {
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "shark bites",
      email: "shark@gmail.com",
      phone: 123456789,
      area: "ahm",
      status: "active",
    },
    {
      id: 2,
      name: "pm traders",
      email: "pm@gmail.com",
      phone: 9876543210,
      area: "ahm",
      status: "active",
    },
  
  ]);

  const [searchTerm, setSearchTerm] = useState(true);
  const [showModal, setShowModal] = useState(false);
  

  const handleSearch = () => {
    const filteredSuppliers = suppliers.filter((customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSuppliers(filteredSuppliers);
  };

  const handleEdit = (id) => {

    console.log("Edit customer with ID:", id);
  };

  const handleDelete = (id) => {
    const updatedCustomers = suppliers.filter((customer) => customer.id !== id);
    setSuppliers(updatedCustomers);
  };
  const handleAddCustomer = () => {
    setShowModal(true);
  };

  // const closeModal = () => {
  //   setShowModal(false);
  // };
  return (
    <>
      <div>
        <h1>Manage Suppliers</h1>
        <StyledDiv>
          <StyledSelect
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
        > {suppliers.map((customer) => (
                <option key={customer.id}>{customer.name}</option>))}
          </StyledSelect>
          <ButtonContainer>
            <StyledButton onClick={handleSearch}>Search</StyledButton>
            <StyledButton onClick={handleAddCustomer}>
              Add Supplier
            </StyledButton>
          </ButtonContainer>
        </StyledDiv>

        <div>
          <h3> Suppliers List:</h3>
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
              {suppliers.map((supplier) => (
                <Tr key={supplier.id}>
                  <Td>{supplier.name}</Td>
                  <Td>{supplier.email}</Td>
                  <Td>{supplier.phone}</Td>
                  <Td>{supplier.area}</Td>
                  <Td>{supplier.status}</Td>
                  <Td>
                    <button
                      className="btns"
                      onClick={() => handleEdit(supplier.id)}
                    >
                      Edit
                    </button>{" "}
                    |
                    <button
                      className="btns"
                      onClick={() => handleDelete(supplier.id)}
                    >
                      Delete
                    </button>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </div>
        {showModal && (
          <AddSuppliers suppliers={suppliers} setSuppliers={setSuppliers} />
        )}
      </div>
    </>
  );
}
export default ManageSupplier;
