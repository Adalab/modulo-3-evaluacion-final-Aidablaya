import { Link } from "react-router-dom";


const Character = ({eachContact}) => {
    return (
        <Link to={"/character/" + eachContact.id}>
            <img src={eachContact.image} alt={eachContact.name} />
            <h3>{eachContact.name}</h3>
            <p>{eachContact.species}</p>
        </Link>
    )
}

export default Character;