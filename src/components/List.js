import Character from "./Character";



const List = ({ list }) => {
  const htmlLi = list.map((eachCharacter) => (
    <li key={eachCharacter.id}>
      <Character eachContact={eachCharacter} />
    </li>
  ));

  return <ul>{htmlLi}</ul>;
};

export default List;