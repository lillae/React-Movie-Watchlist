import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//Components
import Movie from '../components/Movie';

//Styles and animation
import styled from 'styled-components';
import { StyledMovies, StyledMovieList } from '../components/Movies';
import { clearAll } from '../actions/watchlistAction';
// import { motion } from 'framer-motion';

const Watchlist = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);

  const onClear = () => {
    dispatch(clearAll());
  };

  return (
    <StyledWatchlist>
      <nav>
        <Link to='/'>Movie Database</Link>
      </nav>
      <div className='heading'>
        <h2>Watchlist</h2>
        <button onClick={onClear} type='submit' className='clearBtn'>
          <i class='fas fa fa-trash'></i>
        </button>
      </div>
      <div className='line'></div>
      <StyledList>
        {favorites.map((movie) => (
          <Movie id={movie.id} poster={movie.poster_path} key={movie.id} />
        ))}
      </StyledList>
    </StyledWatchlist>
  );
};

const StyledWatchlist = styled(StyledMovieList)`
  height: 100vh;
  width: 100%;
  background: black;
  padding: 2rem;
  nav {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-weight: bold;
      font-size: 2rem;
      @media (min-width: 1920px) {
        font-size: 3.5rem;
      }
    }
    @media (min-width: 1920px) {
      height: 5rem;
    }
  }
  .heading {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .clearBtn {
      padding: 0rem 0.5rem;
      cursor: pointer;
      background: transparent;
      font-size: 1.1rem;
      color: white;
      font-weight: 600;
      i {
        font-size: 2rem;
        align-self: center;
        &:hover {
          color: var(--main);
          transition: all 0.5s ease;
        }
      }
    }
  }
  h2 {
    margin-top: 2rem;
  }
  .line {
    height: 0.5rem;
    background: #8f39ff;
    width: 35vw;
    @media (max-width: 767px) {
      width: 50vw;
    }
  }
`;

const StyledList = styled(StyledMovies)`
  grid-template-columns: repeat(auto-fit, minmax(200px, 210px));
  grid-auto-columns: minmax(230px, 1fr);
  img {
    max-width: 100%;
    height: auto;
  }
  .portrait {
    width: 200px;
    @media (max-width: 1199px) and (orientation: landscape) {
      height: 300px;
    }
    @media (min-width: 1920px) {
      width: 400px;
    }
  }
  @media (min-width: 768px) {
    overflow-x: scroll;
    overflow-y: auto;
    grid-auto-flow: row;
    width: 100%;
    height: fit-content;
    grid-template-columns: repeat(auto-fit, minmax(200px, 210px));
    grid-auto-columns: minmax(230px, 1fr);
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(auto-fit, minmax(270px, 270px));
    grid-auto-columns: minmax(270px, 1fr);
  }
`;

export default Watchlist;
