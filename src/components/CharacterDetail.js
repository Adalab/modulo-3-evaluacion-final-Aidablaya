import { Link, useParams } from "react-router-dom";
import '../styles/layout/CharacterDetail.scss'

const CharacterDetail = ({ list }) => {
  const { characterId } = useParams();
  const characterData = list.find((character) => character.id === parseInt(characterId));

  console.log (characterData);

  if (characterData) {
    const status = characterData.status === "Alive" ? "vivo" : "muerto";
    return (
      <div className="box">
        <section className="box__detail">
          <h2 className="box__detail--title">{characterData.name}</h2>
          <img className="box__detail--img" src={characterData.image} alt={characterData.name} />
          <h3 className="box__detail--specie">Especie: {characterData.species}</h3>
          <h4 className="box__detail--planet">Procedencia: {characterData.planet}</h4>
          <p className="box__detail--episode">Numero de episodios donde aparece: {characterData.episode.length}</p>
          <p className="box__detail--status">{status}</p>
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

