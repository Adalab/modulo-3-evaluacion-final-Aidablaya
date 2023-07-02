    

const getApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      const cleanData = data.results.map((objectAPI)=>{
        return {
          id:objectAPI.id,
          name:objectAPI.name,
          image:objectAPI.image,
          species:objectAPI.species

        }
      });

      console.log(cleanData);
      return cleanData;
    })
    

};

export default getApi;