import { useState } from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import AddCustomer from "./AddCustomer";

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
      id: 1,
      name: "hanu",
      email: "prakash@gmail.com",
      phone: 123456789,
      area: "ahm",
      status: "active",
    },
    {
      id: 2,
      name: "ravi",
      email: "ravi@gmail.com",
      phone: 9876543210,
      area: "ahm",
      status: "active",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);


  const handleSearch = () => {
    const filteredCustomers = customers.filter((customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCustomers(filteredCustomers);
  };

  const handleEdit = (customer) => {
    setEditingCustomer({...customer});
  };
  

  const handleDelete = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };
  const handleAddCustomer = () => {
    setShowModal(true);
  };
  const handleSave = (id) => {
    const updatedCustomers = customers.map((cust) =>
      cust.id === id ? editingCustomer : cust
    );
    setCustomers(updatedCustomers);
    setEditingCustomer(null);  // Reset the editing state
  };
  
  // const closeModal = () => {
  //   setShowModal(false);
  // };
  return (
    <>
      <div>
        <h1>Manage Customers</h1>
        <StyledDiv>
          <StyledSelect
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          >
            {" "}
            {customers.map((customer) => (
              <option key={customer.id}>{customer.name}</option>
            ))}
          </StyledSelect>
          <ButtonContainer>
            <StyledButton onClick={handleSearch}>Search</StyledButton>
            <StyledButton onClick={handleAddCustomer}>
              Add Customer
            </StyledButton>
          </ButtonContainer>
        </StyledDiv>

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
  {customers.map((customer) =>
    editingCustomer && editingCustomer.id === customer.id ? (
      <Tr key={customer.id}>
        <Td>
          <input
            type="text"
            value={editingCustomer.name}
            onChange={(e) => setEditingCustomer({...editingCustomer, name: e.target.value})}
          />
        </Td>
        <Td>
          <input
            type="email"
            value={editingCustomer.email}
            onChange={(e) => setEditingCustomer({...editingCustomer, email: e.target.value})}
          />
        </Td>
        <Td>
          <input
            type="text"
            value={editingCustomer.phone}
            onChange={(e) => setEditingCustomer({...editingCustomer, phone: e.target.value})}
          />
        </Td>
        <Td>
          <input
            type="text"
            value={editingCustomer.area}
            onChange={(e) => setEditingCustomer({...editingCustomer, area: e.target.value})}
          />
        </Td>
        <Td>
          <select
            value={editingCustomer.status}
            onChange={(e) => setEditingCustomer({...editingCustomer, status: e.target.value})}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </Td>
        <Td>
          <button className="btns" onClick={() => handleSave(customer.id)}> Save | </button>
          <button className="btns" onClick={() => setEditingCustomer(null)}> Cancel</button>
        </Td>
      </Tr>
    ) : (
      <Tr key={customer.id}>
        <Td>{customer.name}</Td>
        <Td>{customer.email}</Td>
        <Td>{customer.phone}</Td>
        <Td>{customer.area}</Td>
        <Td>{customer.status}</Td>
        <Td>
          <button className="btns" onClick={() => handleEdit(customer)}>Edit | </button>
          <button className="btns" onClick={() => handleDelete(customer.id)}> Delete</button>
        </Td>
      </Tr>
    )
  )}
</tbody>

          </Table>
        </div>
        {showModal && (
          <AddCustomer customers={customers} setCustomers={setCustomers} />
        )}
      </div>
    </>
  );
}
export default ManageCustomer;
