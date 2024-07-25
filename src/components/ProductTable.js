
import ProductRow from "./ProductRow"

function ProductTable({ products, searchQuery, showAvailability }) {

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) && (showAvailability ? product.inStock : true)
    )
  })

  return (
    <div className="product-table">
      <table className="table-on-display">
        <thead className="table-head">
          <tr className="table-head-row">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="table-body">
         {filteredProducts.map((product) => {return (
          <ProductRow key={product.id} product={product} />
          )
         })}
        </tbody>
      </table> 
    </div>
  )
}

export default ProductTable
