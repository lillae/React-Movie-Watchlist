import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSearch } from '../actions/moviesAction';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <form className='search'>
        <input
          value={textInput}
          onChange={inputHandler}
          type='text'
          placeholder='search movies'
        />
        <button onClick={submitSearch} type='submit'>
          <i className='fa fas fa-search search'></i>
        </button>
        <Link to='/watchlist'>Watchlist</Link>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  width: 100vw;
  padding: 1rem 2rem;
  background: transparent;
  text-align: right;
  form {
    display: inline-flex;
    position: relative;
    width: 100%;
    justify-content: flex-end;
    input {
      width: 35vw;
      font-size: 1.3rem;
      padding: 0.8rem;
      background: #2a2a2a52;
      outline: 1px solid transparent;
      color: #ffffff;
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      margin-right: 1rem;
      &:focus {
        outline: 1px solid #8f39ff;
        transition: 350ms ease;
      }
      ::placeholder {
        font-weight: 200;
        text-transform: capitalize;
        font-style: italic;
        font-size: 1rem;
      }
      @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        width: 40vw;
      }
      @media (max-width: 768px) {
        width: 80vw;
      }
      @media (max-width: 768px) and (orientation: landscape) {
        width: 55vw;
      }
      @media (min-width: 1920px) {
        width: 25vw;
      }
      @media (min-width: 2100px) {
        width: 20vw;
      }
    }
    button {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.3rem;
      text-transform: uppercase;
      padding: 0.8rem 0rem;
      background: transparent;
      color: #ffffff;
      font-weight: 300;
      cursor: pointer;
      position: absolute;
      top: 5%;
      right: 9rem;
    }
    a {
      padding: 1rem 0.2rem;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

export default Nav;
