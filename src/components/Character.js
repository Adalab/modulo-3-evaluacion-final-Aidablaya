import { Link } from "react-router-dom";
import '../styles/layout/Character.scss'

const Character = ({eachContact}) => {
    return (
        <Link to={"/character/" + eachContact.id}>
            <div className="listCharacter">
                <img className="listCharacter__img" src={eachContact.image} alt={eachContact.name} />
                <h3 className="listCharacter__title">{eachContact.name}</h3>
                <p className="listCharacter__text">{eachContact.species}</p>
            </div>
        </Link>
    )
}

export default Character;