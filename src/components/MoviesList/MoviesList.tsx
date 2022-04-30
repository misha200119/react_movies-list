import React from 'react';
import { MoviesServerData } from '../../types/MoviesServerData';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

type ServerData = {
  moviesData: Array<MoviesServerData>
};

export const MoviesList: React.FC<ServerData> = ({ moviesData }) => (
  <div className="moviesList">
    {moviesData.map(({
      title, description, imgUrl, imdbUrl,
    // eslint-disable-next-line array-callback-return
    }) => (
      <MovieCard
        title={title}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
      />
    ))}
  </div>
);
