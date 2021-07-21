import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../actions/moviesAction';
//Components
import Movie from '../components/Movie';
import Nav from '../components/Nav';
import imgPlaceholder from '../img/denise-jans-WevidclYpdc-unsplash.jpg';
//Styling and Animation
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { lineAnim } from '../animations';

const Movies = () => {
  const dispatch = useDispatch();

  const { trending, upcoming, scifi, thriller, searched } = useSelector(
    (state) => state.movies
  );
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <>
      <Nav />
      <StyledMovieList>
        {searched.length ? (
          <div className='searchSection' ref={ref}>
            <h2 ref={ref}>Searched Movies</h2>
            <motion.div
              className='line'
              variants={lineAnim}
              initial={controls}
              animate={controls}
            ></motion.div>
            <Searched>
              {searched
                .filter(
                  (movie) =>
                    movie.poster_path !== null && movie.backdrop_path !== null
                )
                .map((movie) => (
                  <Movie
                    poster={movie.poster_path}
                    id={movie.id}
                    key={movie.id}
                    searchRow
                    placeholder={imgPlaceholder}
                  />
                ))}
            </Searched>
          </div>
        ) : (
          ''
        )}
        <h2>Trending</h2>
        <motion.div className='line'></motion.div>
        <StyledMovies>
          {trending.map((movie) => (
            <Movie id={movie.id} poster={movie.poster_path} key={movie.id} />
          ))}
        </StyledMovies>
        <h2>Upcoming Movies</h2>
        <motion.div className='line'></motion.div>
        <StyledMovies>
          {upcoming.map((movie) => (
            <Movie
              id={movie.id}
              poster={movie.poster_path}
              genre={movie.genre_id}
              release={movie.release_date}
              key={movie.id}
            />
          ))}
        </StyledMovies>
        <h2>Sci-fi</h2>
        <motion.div className='line'></motion.div>
        <Larger>
          {scifi.map((movie) => (
            <Movie
              id={movie.id}
              backdrop={movie.backdrop_path}
              key={movie.id}
              isLargeRow
              title={movie.original_title}
            />
          ))}
        </Larger>
        <h2>Thriller & Mistery</h2>
        <motion.div className='line'></motion.div>
        <Larger>
          {thriller.map((movie) => (
            <Movie
              id={movie.id}
              backdrop={movie.backdrop_path}
              key={movie.id}
              isLargeRow
              title={movie.original_title}
            />
          ))}
        </Larger>
      </StyledMovieList>
    </>
  );
};

export const StyledMovieList = styled(motion.div)`
  width: 100vw;
  height: 100%;
  padding: 2rem 2rem 0rem;
  margin: 0px auto;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 2rem;
    padding: 1rem 0rem 0.5rem;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1920px) {
      font-size: 3rem;
    }
  }

  .line {
    height: 0.5rem;
    background: #8f39ff;
    width: 35vw;
    @media (max-width: 767px) {
      width: 50vw;
    }
  }
  .searchSection {
    width: 100vw;
  }
  .favSection {
    width: 100vw;
  }
`;

export const StyledMovies = styled(motion.div)`
  height: auto;
  width: 100%;
  display: grid;
  overflow-y: scroll;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-columns: minmax(200px, 1fr);
  overflow-x: auto;
  grid-column-gap: 1.3rem;
  grid-row-gap: 3rem;
  margin-bottom: 2.5rem;
  padding: 1.9rem 0.6rem;
  scrollbar-color: transparent transparent;
  --ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-columns: minmax(180px, 1fr);
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-auto-columns: minmax(270px, 1fr);
  }
`;

const Larger = styled(StyledMovies)`
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-columns: minmax(400px, 1fr);
  grid-column-gap: 1.3rem;
  padding: 1.9rem 1.1rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-columns: minmax(250px, 1fr);
  }
`;

const Searched = styled(StyledMovies)`
  grid-template-columns: repeat(auto-fit, minmax(200px, 210px));
  grid-auto-columns: minmax(210px, 1fr);
  @media (max-width: 1199px) and (orientation: landscape) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-columns: minmax(180px, 1fr);
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-auto-columns: minmax(270px, 1fr);
  }
`;

export default Movies;
