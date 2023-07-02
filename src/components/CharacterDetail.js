import { Link, useParams } from "react-router-dom";

const CharacterDetail = ({ list }) => {
  const { characterId } = useParams();
  const characterData = list.find((character) => character.id === parseInt(characterId));

  console.log (characterData);

  if (characterData) {
    const status = characterData.status === "Alive" ? "vivo" : "muerto";
    return (
      <div>
        <section>
          <h2>{characterData.name}</h2>
          <img src={characterData.image} alt={characterData.name} />
          <h3>{characterData.species}</h3>
          <h2>{characterData.planet}</h2>
          <p>{characterData.episode.length}</p>
          <p>{status}</p>
          <Link to="/">Volver</Link>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <p>Ups, parece que este personaje no se encuentra en La Ciudadela de Ricks</p>
        <Link to="/">Volver</Link>
      </div>
    );
  }
};

export default CharacterDetail;

