import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
// import Nav from './Nav';

const HeroSection = () => {
  const { isLoading } = useSelector((state) => state.hero);
  return (
    <>
      {isLoading && (
        <StyledHero>
          {/* <Nav /> */}
          <StyledIntro>
            <h3>Blade Runner 2049</h3>
            <p>
              Thirty years after the events of the first film, a new blade
              runner, LAPD Officer K, unearths a long-buried secret that has the
              potential to plunge what's left of society into chaos...
            </p>
          </StyledIntro>
        </StyledHero>
      )}
    </>
  );
};

const StyledHero = styled(motion.div)`
  width: 100vw;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  background: url('https://www.themoviedb.org/t/p/original/3oMcgwieehGrWXlGzhbgYfrB7mv.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  @media (max-width: 1199px) {
    min-height: 70vh;
    background-position: 0px 0px;
  }
  @media (min-width: 768px) and (max-width: 1199px) and (orientation: portrait) {
    background-position: -200px 0px;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    background-position: 0px -25px;
  }
  @media (min-width: 375px) and (max-width: 768px) and (orientation: portrait) {
    background-position: 0px 0px;
  }

  @media (min-width: 1100px) and (max-width: 1439px) {
    min-height: 100vh;
  }

  @media (min-width: 1440px) {
    min-height: 85vh;
  }
  @media (min-width: 1920px) {
    min-height: 87vh;
  }
  @media (min-width: 2100px) {
    min-height: 90vh;
    background-position: 0px -120px;
  }
`;

const StyledIntro = styled(motion.div)`
  align-self: flex-start;
  padding: 0.5rem 2rem;
  max-width: 600px;
  position: absolute;
  bottom: 5vh;

  @media (max-width: 1024px) {
    max-width: 450px;
  }

  @media (max-width: 1199px) {
    bottom: 15%;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    bottom: 5%;
    max-width: 380px;
  }
  @media (max-width: 768px) and (orientation: portrait) {
    bottom: 8%;
  }
  @media (min-width: 1025px) and (orientation: landscape) {
    bottom: 10vh;
  }
  @media (min-width: 1920px) {
    max-width: 1000px;
  }
  @media (min-width: 2100px) {
    bottom: 18%;
    left: 1%;
  }
  h3 {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 767px) {
      font-size: 2.5rem;
    }
    @media (max-width: 320px) {
      font-size: 2rem;
    }
    @media (min-width: 1920px) {
      font-size: 5rem;
    }
  }
  p {
    font-weight: 500;
    font-size: 1.2rem;
    @media (max-width: 768px) and (orientation: landscape) {
      font-size: 1rem;
    }
    @media (min-width: 1920px) {
      font-size: 2rem;
    }
  }
`;

export default HeroSection;
