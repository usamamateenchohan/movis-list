import React, { useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getUrlLastId } from '../Common/reUseFunctions';

const MovieDetails = ({
  onGetMovieDetail,
  movieDetail,

  location
}) => {
  useEffect(() => {
    const movieID = getUrlLastId(location.pathname);
    onGetMovieDetail(movieID);
  }, []);

  return (
    movieDetail ?
      <Row gutter={16}>
        <Col span={10}>
          <img src={movieDetail.Poster} width="100%" alt="Main Movie Image" />
        </Col>
        <Col span={14}>
          <div className="d-flex align-items-center mb-15">
            <Link to="/movies">
              <Button className="mr-10" type="default" icon={<RollbackOutlined />} />
            </Link>

            <h1 className="mb-0">{movieDetail.Title}</h1>
          </div>

          <Row className="details-list-style">
            <Col span={24}>
              <strong>Release Date:</strong> {movieDetail.Released}
            </Col>

            <Col span={24}>
              <strong>Genre:</strong> {movieDetail.Genre}
            </Col>

            <Col span={24}>
              <strong>Director Name:</strong> {movieDetail.Director}
            </Col>

            <Col span={24}>
              <strong>Writers Name:</strong> {movieDetail.Writer}
            </Col>

            <Col span={24}>
              <strong>Actors Name:</strong> {movieDetail.Actors}
            </Col>

            <Col span={24}>
              <strong>Run Time:</strong> {movieDetail.Runtime}
            </Col>

            <Col span={24}>
              <strong>Language:</strong> {movieDetail.Language}
            </Col>

            <Col span={24}>
              <strong>Country Name:</strong> {movieDetail.Country}
            </Col>

            <Col span={24}>
              <strong>Awards:</strong> {movieDetail.Awards}
            </Col>

            <Col span={24}>
              <strong>Description:</strong> {movieDetail.Plot}
            </Col>
          </Row>

          {
            (movieDetail.Ratings && movieDetail.Ratings.length > 0) ?
              <Row>
                {
                  movieDetail.Ratings.map((rate, index) => {
                    return (
                      <Col span={8} key={index}>
                        <div className="rating-box">
                          <p>{rate.Source}</p>
                          <h3>{rate.Value}</h3>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row> : ''
          }
        </Col>
      </Row> : ''
  )
}

export default MovieDetails;