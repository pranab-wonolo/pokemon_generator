import React, { Fragment } from 'react';
import {
  Query, // component
  useQuery // hook
} from 'urql';
import getPokemons from './api/getPokemons';

const PokemonGenerator = () =>
{
  return (
  <Fragment>
    <h1>🤔</h1>
    <p>
      Hmm... Needs more Pokemon
    </p>
  </Fragment>
)}

export default PokemonGenerator;
