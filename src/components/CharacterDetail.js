import { Link, useParams } from "react-router-dom";
import '../styles/layout/CharacterDetail.scss'
import dead from '../images/lapida-sepulcral.png'

const CharacterDetail = ({ list }) => {
  const { characterId } = useParams();
  const characterData = list.find((character) => character.id === parseInt(characterId));

  console.log (characterData);

  if (characterData) {
    const status = characterData.status === "Alive" ? "" : "";
    const statusIcon= characterData.status === "Alive" ? null : <img src={dead} alt="icono muerte" style={{width: "40px"}}></img>
    return (
      <div className="box">
        <section className="box__return">
        <Link to="/" className="box__return--return">Volver</Link>
        </section>
        <section className="box__detail">
          <h2 className="box__detail--title">{characterData.name}</h2>
          <img className="box__detail--img" src={characterData.image} alt={characterData.name} />

          <article className="box__detail--specie">
            <h3 >Especie: {characterData.species}</h3>
            <p className="box__detail--status">{status}</p>
            {status} {statusIcon}
          </article>
          <h4 className="box__detail--planet">Procedencia: {characterData.planet}</h4>
          <p className="box__detail--episode">Numero de episodios donde aparece: {characterData.episode.length}</p>
          
          
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

