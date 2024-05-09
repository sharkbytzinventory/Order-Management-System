function ItemStockDetail({ items, setItem }) {
  return (
    <>
      <div>
        <h3>Item List:</h3>
        {items.map((item) => (
          <>
            <div key={item.id}>
              <span>Item Name: {item.name}</span>{" "}
              <span>Item Category:{item.category}</span>
              <span>Brand:{item.brand}</span>
            </div>
            <div>
              <Table>
                <HeadTr>
                  <Th>Date</Th>
                  <Th>Qty</Th>
                  <Th>Unit</Th>
                  <Th>Price</Th>
                  <Th>Type</Th>
                </HeadTr>

                <>
                  <Tr key={item.id}>
                    <Td>{item.name}</Td>
                    <Td>{item.qty}</Td>
                    <Td>{item.unit}</Td>
                    <Td>{item.price}</Td>
                    <Td>
                      <select>
                        <option value="in">In</option>
                        <option value="out">Out</option>
                      </select>
                    </Td>
                  </Tr>
                </>
              </Table>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
export default ItemStockDetail;
