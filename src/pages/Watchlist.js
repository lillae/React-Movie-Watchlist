import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
//Components
import Movie from '../components/Movie';

//Styles and animation
import styled from 'styled-components';
import { StyledMovies, StyledMovieList } from '../components/Movies';
import { clearAll } from '../actions/watchlistAction';
import { useLocation, useHistory } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { popup } from '../animations';

const Watchlist = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  const isMobile = window.innerWidth < 1200;
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const controls = useAnimation();

  const onClear = () => {
    dispatch(clearAll());
  };

  const handleClick = () => {
    history.push('/watchlist');
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (inView && !isMobile) {
      controls.start('show');
    }
    if (!inView && !isMobile) {
      controls.start('hidden');
    }
  }, [controls, inView, isMobile]);

  return (
    <>
      <StyledWatchlist ref={ref}>
        <nav>
          <Link to='/'>Movie Database</Link>
        </nav>
        <div className='heading'>
          <h2>Watchlist</h2>
          <button onClick={onClear} type='submit' className='clearBtn'>
            <i className='fas fa fa-trash'></i>
          </button>
        </div>
        <motion.div className='line'></motion.div>
        <StyledList variants={popup} initial={controls} animate={controls}>
          {favorites.map((movie) => (
            <Movie
              onClick={handleClick}
              pathId={pathId}
              id={movie.id}
              poster={movie.poster_path}
              key={movie.id}
            />
          ))}
        </StyledList>
      </StyledWatchlist>
      {pathId && <MovieDetail />}
    </>
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
