import React, { Fragment, useState, useEffect } from 'react';
import {
  Query, // component
  useQuery // hook
} from 'urql';
import getPokemons from './api/getPokemons';

const PokemonGenerator = () =>
{
  const [pokemons, setState] = useState([])
  const [randomPokemonIdx, setPokemon] = useState(0)
  const [res] = useQuery({
    query: getPokemons
  })
  useEffect(() => {
    if(typeof res.data !== 'undefined' && !res.fetching && !res.error){
      console.log("setting pokemons", res.data.pokemons)
      setState(res.data.pokemons);
    }
  }, [res.data, res.error, res.fetching])

  if(res.error) return "Oops failed to load Pokemons"
  if(res.fetching || !pokemons.length) return "Loading"

  const randomize = () => {
    setPokemon(Math.floor(Math.random() * 150))
  }

  return (
  <Fragment>
    <h1>{pokemons[randomPokemonIdx].name}</h1>
    <h2>{pokemons[randomPokemonIdx].classification}</h2>
    <p>
      <img src={pokemons[randomPokemonIdx].image} alt={pokemons[randomPokemonIdx].name} />
    </p>
    <button onClick={randomize}>Get Random Pokemon!</button>
  </Fragment>
)}

export default PokemonGenerator;
