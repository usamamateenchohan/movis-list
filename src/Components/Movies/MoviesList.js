import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';

const MoviesList = ({
  data
}) => {
  console.log("sfgsfgsrgsdfgs", data)
  return (

    <Col span={6}>
      <Link to={`/movies/${data.imdbID}`}>
        <div className="movie-box">
          <img src={data.Poster} alt="Thumbnail" />
          <div className="caption">
            <h3>{data.Title}</h3>
            <p>Year: {data.Year}</p>
            <p>Type: {data.Type}</p>
          </div>
        </div>
      </Link>
    </Col>
  )
}

export default MoviesList;