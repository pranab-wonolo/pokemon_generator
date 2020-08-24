import React, { Fragment } from 'react';
import {
  Query, // component
  useQuery // hook
} from 'urql';
import getStarWarsMovie from './api/getStarWarsMovie';

const StarWarsMovieGenerator = () => (
  <Fragment>
    <h1>🤔</h1>
    <p>
      Long time ago, in a Galaxy far far away...
    </p>
  </Fragment>
)

export default StarWarsMovieGenerator;
