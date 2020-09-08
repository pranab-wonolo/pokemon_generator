import React from 'react';
import {
  Query, // component
} from 'urql';
import getPokemons from './api/getPokemons';

class PokemonGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomPokemonIdx: Math.round(Math.random() * 150)
    };
    this.randomizePokemon = this.randomizePokemon.bind(this)
  }

  randomizePokemon(){
    this.setState({
      randomPokemonIdx: Math.round(Math.random() * 150)
    })
  }

  render() {
    return (
      <Query query={getPokemons}>
        {({ fetching, error, data }) => {
          if (error) return 'Oops';
          if (fetching) return 'Loading';
          const { randomPokemonIdx } = this.state;
          const pokemon = data.pokemons[randomPokemonIdx];
          return (
            <div>
              <h1>{pokemon.name}</h1>
              <h2>{pokemon.classification}</h2>
              <p >
                <img src={pokemon.image} alt={pokemon.name} style={{height: '250px'}} />
              </p>
              <button onClick={this.randomizePokemon}>Gimme Pokemon!</button>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PokemonGenerator;
