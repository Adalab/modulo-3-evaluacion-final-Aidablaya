
import '../styles/App.scss';

import { useState,useEffect } from 'react';
import getApi from '../services/api';
import List from './List';
import RYM from '../images/rick-y-morty.png';



function App() {

  //VARIABLES ESTADO
  const [list,setList] = useState([]);

  

  ////FETCH A LA API
  useEffect(()=> {
    getApi().then((cleanData)=> {
      setList(cleanData);
    });
   }, []);
  

  return (
    <div>
      <header className="header">
        <img className="header__img" src={RYM} alt="" />
      </header>
      <form>
        <input type="text" />
      </form>
      <List list={list}>
        
      </List>
      
    </div>
  )
};

export default App;
