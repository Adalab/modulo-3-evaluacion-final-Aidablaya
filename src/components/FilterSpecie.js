
import '../styles/layout/FilterSpecie.scss';

const FilterSpecie = ({ searchSpecie, handleFilter, species }) => {
    const handleChangeSpecie = (ev) => {
      const specie = ev.target.value;
      const checked = ev.target.checked;
      if (checked) {
        handleFilter('species', [...searchSpecie, specie]);
      } else {
        handleFilter('species', searchSpecie.filter((s) => s !== specie));
      }
    };
  
    return (
      <form className='checked'>
        <p>¿Sabes su especie?</p>
        {species.map((specie) => (
          <label key={specie}>
            
            <input
              type="checkbox"
              name="specie"
              value={specie}
              checked={searchSpecie.includes(specie)}
              onChange={handleChangeSpecie}
            />
            {specie}
          </label>
        ))}
      </form>
    );
  };
  
export default FilterSpecie;