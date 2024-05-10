import styled from "styled-components";

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

function AddPurchaseItem() {
    return (
        <Table>
        <thead>
          <Tr>
            <Th>Item</Th>
            <Th>Qty</Th>
            <Th>Unit Cost</Th>
            <Th>Tax</Th>
            <Th>Purchase Price</Th>
            <Th>Action</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Product 1</Td>
            <Td>10</Td>
            <Td>1000</Td>
            <Td>20</Td>
            <Td>20020</Td>
            <Td>
              <Td>Edit</Td>
              <Td>Delete</Td>
            </Td>
          </Tr>
          <Tr>
            <Td>Product 2</Td>
            <Td>2</Td>
            <Td>700</Td>
            <Td>14</Td>
            <Td>14014</Td>
            <Td>
              <Td>Edit</Td>
              <Td>Delete</Td>
            </Td>
          </Tr>
          <Tr>
            <Td>Product 3</Td>
            <Td>10</Td>
            <Td>1100</Td>
            <Td>11</Td>
            <Td>1111</Td>
            <Td>
              <Td>Edit</Td>
              <Td>Delete</Td>
            </Td>
          </Tr>
          {items.map((item, index) => (
            <tr key={index}>
              <Td>{item.item}</Td>
              <Td>{item.qty}</Td>
              <Td>{item.unitCost}</Td>
              <Td>{item.tax}</Td>
              <Td>{item.purchasePrice}</Td>
              <Td>
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </Td>
            </tr>
          ))}

          <Td>Save</Td>
        </tbody>
      </Table>
    )
}

export default AddPurchaseItem;
