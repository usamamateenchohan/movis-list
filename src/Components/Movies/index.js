import React, { useState, useEffect, Fragment } from 'react';
import { Row, Pagination } from 'antd';
import Filter from './Filter';
import MoviesList from './MoviesList';

import emptyImg from '../../statics/images/empty-search.jpg';

const Movies = ({
  onGetMovies,
  moviesList
}) => {
  const [search, setSearch] = useState('game');
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (search.length > 3) {
      onGetMovies(search, current)
    }
  }, [search, current])

  const onSearchMovie = (e) => {
    setSearch(e.target.value);
  }

  const onChangePage = (page) => {
    setCurrent(page)
  }

  return (
    
    <div>
      <Filter onSearchMovie={onSearchMovie} search={search} />
      {
        (moviesList && moviesList.Response === 'True') &&
        <Fragment>
          <Row gutter={16}>
            {
              (moviesList.Search.length > 0) &&
              moviesList.Search.map((data, index) => {
                return (
                  <MoviesList key={index} data={data} />
                )
              })
            }
          </Row>
          {
            (moviesList && moviesList.totalResults) &&
            <div className="pagination-style">
              <Pagination
                defaultCurrent={current}
                total={moviesList.totalResults}
                onChange={onChangePage}
              />
            </div>
          }
        </Fragment>
      }

      {
        (moviesList && moviesList.Response === 'False') &&
        <div className="empty-data">
          <img src={emptyImg} alt="Empty Data" />
          <h3>{moviesList.Error}</h3>
        </div>
      }


    </div>
  )
}

export default Movies;