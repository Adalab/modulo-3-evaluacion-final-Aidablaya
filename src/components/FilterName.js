import '../styles/layout/FilterName.scss'


const FilterName = ({searchName, handleFilter}) => {

    const handleSearchName = (ev) => {
        //setSearchName(ev.target.value);
        handleFilter('name', ev.target.value)
      };

    return (
        <form className="form">
          <label className='form__text'>¿A quién buscas?</label>
          <input className="form__input" type="text"
          name="search_name"
          id="search_name" 
          value= {searchName}
          onChange= {handleSearchName} />
        </form>
    )
};

export default FilterName;