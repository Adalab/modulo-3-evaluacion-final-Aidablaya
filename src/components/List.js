import Character from "./Character";
import '../styles/layout/List.scss'


const List = ({ list }) => {
  const htmlLi = list.map((eachCharacter) => (
    <li className="list__li" key={eachCharacter.id}>
      <Character eachContact={eachCharacter} />
    </li>
  ));

  return <ul className="list">{htmlLi}</ul>;
};

export default List;