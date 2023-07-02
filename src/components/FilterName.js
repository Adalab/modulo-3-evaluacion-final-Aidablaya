const FilterName = ({searchName, handleFilter}) => {

    const handleSearchName = (ev) => {
        //setSearchName(ev.target.value);
        handleFilter('name', ev.target.value)
      };

    return (
        <form>
        <input type="text"
        name="search_name"
        id="search_name" 
        value= {searchName}
        onChange= {handleSearchName} />
      </form>
    )
};

export default FilterName;