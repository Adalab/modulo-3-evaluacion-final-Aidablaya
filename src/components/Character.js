const Character = ({eachContact}) => {
    return (
        <>
            <img src={eachContact.image} alt={eachContact.name} />
            <h3>{eachContact.name}</h3>
            <p>{eachContact.species}</p>
        </>
    )
}

export default Character;