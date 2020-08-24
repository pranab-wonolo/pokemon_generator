import { createClient } from 'urql';

const client = createClient({
  url: 'https://swapi.graph.cool/',
});

export default client;

