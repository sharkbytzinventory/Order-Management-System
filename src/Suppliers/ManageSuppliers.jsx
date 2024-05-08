import styled from "styled-components";

function ManageSuppliers() {
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
  return (
    <>
      <h1>Manage Suppliers</h1>
      <StyledDiv>
        <StyledSelect>
          <option>suppliers1</option>
          <option>suppliers2</option>
          <option>suppliers3</option>
        </StyledSelect>
        <ButtonContainer>
          <StyledButton>Search</StyledButton>
          <StyledButton>Add Suppliers</StyledButton>
        </ButtonContainer>
      </StyledDiv>
      <div>
        <h3>Supplier List:</h3>
        <div>
            <Table>
            <HeadTr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Area</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                  </HeadTr>
            <Tr>
                  <Td>prakash</Td>
                  <Td>prakash@gmail.com</Td>
                  <Td>9876543210</Td>
                  <Td>ahm</Td>
                  <Td>approved</Td>
                  <Td>Edit | Delete</Td>
            </Tr>

            </Table>
        </div>
      </div>
    </>
  );
}
export default ManageSuppliers;