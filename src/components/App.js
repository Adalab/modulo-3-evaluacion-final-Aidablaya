
import '../styles/App.scss';

import { useState,useEffect } from 'react';
import getApi from '../services/api';
import List from './List';
import RYM from '../images/rick-y-morty.png';
import FilterName from './FilterName';



function App() {

  //VARIABLES ESTADO
  const [list,setList] = useState([]);

  const [searchName,setSearchName] = useState ('');


  

  ////FETCH A LA API
  useEffect(()=> {
    getApi().then((cleanData)=> {
      setList(cleanData);
    });
   }, []);

  ////FUNCIONES EVENTO

  const handleFilter = (varName, varValue) => {
    if ( varName === 'name'){
    setSearchName(varValue)
  }};

  

  const filterCharacter = list
  .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchName.toLowerCase()));
  

  return (
    <div>
      <header className="header">
        <img className="header__img" src={RYM} alt="" />
      </header>
      
      <main>
        <FilterName 
          searchName={searchName}
          handleFilter={handleFilter}>
        </FilterName>

        <List list={filterCharacter}>
        
        </List>
      </main>
      
    </div>
  )
};

export default App;
