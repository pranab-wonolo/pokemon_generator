import React, { Fragment } from 'react';
import {
  Query, // component
  useQuery // hook
} from 'urql';
import getPokemon from './api/getPokemon';

const PokemonGenerator = () => (
  <Fragment>
    <h1>🤔</h1>
    <p>
      Hmm... Needs more Pokemon
    </p>
  </Fragment>
)

export default PokemonGenerator;