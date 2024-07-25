


function SearchBar({ onSearch }) {

  const handleSearchChange = (event) => {
    const searchQuery = event.target.searchProduct.value
    const showAvailability = event.target.checkBoxForStock.checked
    onSearch(searchQuery, showAvailability)
  }



  return (
    <div>
      <form>
        <label htmlFor="search-bar"></label>
        <input type="text" onChange={handleSearchChange} name="search-product" id="search-bar" placeholder="Search"/>
        <label htmlFor="checkbox-for-stock"></label>
        <input type="checkbox" name="checkBoxForStock" id="checkbox-for-stock" />
      </form>
    </div>
  )
}

export default SearchBar
