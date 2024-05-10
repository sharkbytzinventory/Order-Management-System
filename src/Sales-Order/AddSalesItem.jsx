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


function AddSalesItem() {
  return (
    <Table>
      <HeadTr>
        <Th>Item</Th>
        <Th>Qty</Th>
        <Th>Unit Cost</Th>
        <Th>Tax</Th>
        <Th>Sales Price</Th>
        <Th>Action</Th>
      </HeadTr>

      <Tr>
        <Td>Samsung</Td>
        <Td>2</Td>
        <Td>10000</Td>
        <Td>8</Td>
        <Td>20800</Td>
        <Td>
          <Td>Edit</Td>
          <Td>Delete</Td>
        </Td>
      </Tr>
      <Tr>
        <Td>Apple</Td>
        <Td>2</Td>
        <Td>100000</Td>
        <Td>12</Td>
        <Td>216000</Td>
        <Td>
          <Td>Edit</Td>
          <Td>Delete</Td>
        </Td>
      </Tr>
      <Tr>
        <Td>Google Pixel</Td>
        <Td>2</Td>
        <Td>100000</Td>
        <Td>3</Td>
        <Td>50000</Td>
        <Td>
          <Td>Edit</Td>
          <Td>Delete</Td>
        </Td>
      </Tr>
    </Table>
  );
}

export default AddSalesItem;
