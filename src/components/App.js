
import '../styles/App.scss';

import { useState,useEffect } from 'react';
import getApi from '../services/api';
import List from './List';
import RYM from '../images/rick-y-morty2.png';
import FilterName from './FilterName';
import {Route, Routes } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import {useLocation, matchPath} from 'react-router';
import FilterSpecie from './FilterSpecie';



function App() {

  //VARIABLES ESTADO
  const [list,setList] = useState([]);

  const [searchName,setSearchName] = useState ('');

  const [searchSpecie, setSearchSpecie] = useState ([]);

  const [species, setSpecies] = useState([]);

  

  ////FETCH A LA API
  useEffect(()=> {
    getApi().then((cleanData)=> {
      setList(cleanData);
      const uniqueSpecies = [...new Set(cleanData.map((character) => character.species))];
      setSpecies(uniqueSpecies);
    });
   }, []);

  ////FUNCIONES EVENTO

  const handleFilter = (varName, varValue) => {
    if ( varName === 'name'){
    setSearchName(varValue);
  } else if (varName === 'species') {
    setSearchSpecie(varValue);
  }

  };

  const filterCharacter = list
  .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchName.toLowerCase()))
  .filter((eachCharacter) => searchSpecie.length === 0 || searchSpecie.includes(eachCharacter.species));

  //OBTENER INFO DE CONTACTO  
  const {pathname} = useLocation();

  const routeData = matchPath('/character/:characterId', pathname);
  
  const characterId = routeData !== null ? routeData.params.characterId : '';

  const characterData= list.find((character)=> character.id === characterId);

 

  return (
    
      <div>
        <header className="header">
          <img className="header__img" src={RYM} alt="" />
        </header>

        <main className='main'>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FilterName searchName={searchName} handleFilter={handleFilter} />
                  <FilterSpecie searchSpecie={searchSpecie} species={species} handleFilter={handleFilter}/>
                  <List list={filterCharacter} />
                </>
              }
            />

            <Route
              path="/character/:characterId"
              element={<CharacterDetail list={list} />}
            />
          </Routes>
        </main>
      </div>
    
  );
}

export default App;