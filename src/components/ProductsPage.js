
import { useState } from 'react'
import jsonData from './../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage() {

  const [searchQuery, setSearchQuery] = useState('')
  const [showAvailability, setShowAvailability] = useState(false)

  const handleSearch = (query, availability) => {
    setSearchQuery(query)
    setShowAvailability(availability)
  }

  return (
    <div className='products-page'>
      <SearchBar onSearch={handleSearch}/>
      <ProductTable products={jsonData} searchQuery={searchQuery} showAvailability={showAvailability}/>
    </div>
  )
}

export default ProductsPage
