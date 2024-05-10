import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddItem from "./AddItem";
import ItemStockUtilization from "./ItemStockUtilization";

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
function ManageItem() {
  const [items, setItem] = useState([
    {id:1,
      item:"tv",
      supplier:"Pm traders",
      category:"electric",
      brand:"samsung",
      unit:"pcs",
      status:"active",
      qty:40,
      date:"10.5.2024",
    },
    {id:2,
      item:"phone",
      supplier:"mr traders",
      category:"electric",
      brand:"apple",
      unit:"pcs",
      status:"active",
      qty:60,
      date:"5.5.2024",
    }
  ])
  const [showModal, setShowModal] = useState(false);
  const [showStock, setShowStock] = useState(false);
  const [searchTerm, setSearchTerm] = useState(true);

  const handleSearch = () => {
    const filteredItem = items.filter((item) =>
      item.item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setItem(filteredItem);
  };

  const handleDelete = (id) => {
    const updatedItem = items.filter((item) => item.id !== id);
   setItem(updatedItem);
  };
  const handleAddCustomer = () => {
    setShowModal(true);
  };
  const handleStock = () => {
    setShowStock(true);
  };

  return (
    <>
      <h1>Manage Items:</h1>
      <StyledDiv>
      <div>
        <StyledSelect onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}>
        {items.map((item) => (
                <option key={item.id}>{item.item}</option>))}
        </StyledSelect>
        <StyledSelect>
         {items.map((item) =>(<option key={item.id}>{item.supplier}</option>) ) }
        </StyledSelect>
        
        </div>
        <ButtonContainer>
          <StyledButton onClick={handleSearch}>Search</StyledButton>
          <StyledButton onClick={handleAddCustomer}>Add Item</StyledButton>
        </ButtonContainer>
      </StyledDiv>
      <div>
        <h3>Item List:</h3>
        <div>
            <Table>
            <HeadTr>
                  <Th>Item Name</Th>
                  <Th>Supplier</Th>
                  <Th>Category</Th>
                  <Th>Brand</Th>
                  <Th>Unit</Th>
                  <Th>status</Th>
                  <Th>Action</Th>
                  </HeadTr>
                  {items.map((item) => ( <>
                    <Tr key={item.id}>
                    <Td>{item.item}</Td>
                    <Td>{item.supplier}</Td>
                    <Td>{item.category}</Td>
                    <Td>{item.brand}</Td>
                    <Td>{item.unit}</Td>
                    <Td>{item.status}</Td>
                    <Td>
                      <button className="btns"> Edit <span> | </span> </button>
                      <button className="btns"> <Link to="itemsprice">Stock <span> | </span> </Link> </button>
                      <button className="btns" onClick={() => handleDelete(item.id)}> Delete <span> | </span></button>
                      <button className="btns" onClick={handleStock}> Detail  </button>
                      </Td>
              </Tr></>
                  ))}
            
            </Table>
        </div>
      </div>
      {showModal && (
          <AddItem items={items} setItem={setItem} />
        )}
        {showStock && (
          <ItemStockUtilization items={items}  />
        )}
    </>
  );
}
export default ManageItem;
