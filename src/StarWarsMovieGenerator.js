import React, { Fragment } from 'react';
import {
  Query, // component
  useQuery // hook
} from 'urql';
import getStarWarsMovie from './api/getStarWarsMovie';

const StarWarsMovieGenerator = () =>
{
  const [res] = useQuery({
    query: getStarWarsMovie,
    variables: {
      title: 'Attack of the Clones'
    }
  }
  )
  if(res.fetching) return 'Loading'
  if(res.error) return 'Oops'
  return (
  <Fragment>
    <h1>🤔</h1>
    <p>
      Long time ago, in a Galaxy far far away...
    </p>
    <pre>
      {JSON.stringify(res.data, null, 2)}
    </pre>
  </Fragment>
)}

export default StarWarsMovieGenerator;
