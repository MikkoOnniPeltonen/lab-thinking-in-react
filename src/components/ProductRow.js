


function ProductRow({ name, price, inStock }) {

  const color = inStock ? 'black' : 'red'

  return (
    <tr className="product-row">
      <td style={{ color }}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow
