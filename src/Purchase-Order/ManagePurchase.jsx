import styled from "styled-components";

function isDateString(dateString) {
  return !isNaN(Date.parse(dateString));
}

function ManagePurchase() {
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

  const StyledRow = styled.tr`
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
  `;

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
      <h1>Manage Purchase</h1>
      <StyledDiv>
        <div>
          <StyledSelect>
            <option>Customer 1</option>
            <option>Customer 2</option>
            <option>Customer 3</option>
          </StyledSelect>
          <StyledLabel htmlFor="orderDate">Order Date:</StyledLabel>
          <StyledInput type="date" id="orderDate" onChange={handleDateChange} />
          <StyledSelect>
            <option>IN0001 1</option>
            <option>IN0001 2</option>
            <option>IN0001 3</option>
          </StyledSelect>
        </div>
        <ButtonContainer>
          <StyledButton>Search</StyledButton>
          <StyledButton>Add sale Order</StyledButton>
        </ButtonContainer>
      </StyledDiv>
      <div>
        <h3>Order List:</h3>
        <div>
          <Table>
            <thead>
              <tr>
                <Th>Customer Name</Th>
                <Th>Invoice No</Th>
                <Th>Date</Th>
                <Th>Total</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody>
              <StyledRow>
                <Td>customer</Td>
                <Td>IN0001</Td>
                <Td>5/5/2024</Td>
                <Td>21000</Td>
                <Td>Draft</Td>
                <Td>Edit | Delete</Td>
              </StyledRow>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default ManagePurchase;
