const getPokemons = `
  query GetPokemons {
    pokemons(first: 150){
      id
      name
      classification
      image
    }
  }
`;

export default getPokemons;
