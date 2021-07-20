import React from 'react';
//Redux
// import { useDispatch, useSelector } from 'react-redux';
// import { loadMovies } from '../actions/moviesAction';
//Components
import HeroSection from '../components/HeroSection';
import Movies from '../components/Movies';
import Footer from '../components/Footer';
import MovieDetail from '../components/MovieDetail';
import { useLocation } from 'react-router-dom';

//Styling and Animation
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  return (
    <>
      <HeroSection />
      <Movies />
      {pathId && <MovieDetail />}
      <Footer />
    </>
  );
};

export default Home;
