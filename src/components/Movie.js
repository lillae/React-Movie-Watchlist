import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { imgPath } from '../api';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailsAction';
import { Link } from 'react-router-dom';

const Movie = ({ poster, backdrop, isLargeRow, title, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  return (
    <>
      {(poster || backdrop) && (
        <StyledMovie onClick={loadDetailHandler}>
          <Link to={`/movie/${id}`}>
            <img
              src={`${imgPath}${isLargeRow ? backdrop : poster}`}
              alt={poster}
              className={`${!isLargeRow && 'portrait'}`}
            />
            <p>{title}</p>
          </Link>
        </StyledMovie>
      )}
    </>
  );
};

const StyledMovie = styled(motion.div)`
  cursor: pointer;
  margin: 0px auto;
  position: relative;
  transition: transform 450ms ease;
  .imgPlaceholder {
    display: none;
  }

  img {
    width: 100%;
    object-fit: cover;
    position: relative;
    border: 2px solid transparent;
  }
  .portrait {
    height: 300px;
    @media (max-width: 1024px) {
      height: 300px;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
      height: 300px;
    }
    @media (min-width: 1920px) {
      height: 400px;
    }
  }
  &:hover img {
    opacity: 0.9;
    transform: scale(1.08);
    border: 2px solid #8f39ff;
    transition: all 450ms ease;
  }
  p {
    text-align: center;
    margin-top: 5px;
    font-weight: 500;
  }
  a {
    &:hover {
      color: white;
    }
  }
`;

export default Movie;
