import { useState } from 'react';
import '../styles/layout/FilterName.scss'


const FilterName = ({searchName, handleFilter}) => {

    const [errorMessage, setErrorMessage]= useState('');

    const handleSearchName = (ev) => {
        //setSearchName(ev.target.value);
        const name = ev.target.value
        handleFilter('name', name)

      if (searchName && !searchName.toLowerCase().includes(name.toLowerCase())) {
      setErrorMessage('¿Este personaje es de tu planeta? Porque del mío no')
      } else {
      setErrorMessage('');
      }
      };
    
    
    return (
        <form className="form">
          <label className='form__text'>¿A quién buscas?</label>
          <input className="form__input" type="text"
          name="search_name"
          id="search_name" 
          value= {searchName}
          onChange= {handleSearchName} />

          {errorMessage &&  <p>{errorMessage} </p>}
        </form>
    )}
;

export default FilterName;