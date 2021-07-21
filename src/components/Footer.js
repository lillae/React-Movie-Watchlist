import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='footer-info'>
        <StyledCodeInfo>
          <a
            href='https://github.com/lillae/React-Movie-Watchlist/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fab fa-github github'></i>
            View Code
          </a>

          <a
            href='https://developers.themoviedb.org/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <i className='fa fas fa-link'></i>
            All data provided by TMDb
          </a>
          <a
            href='https://www.lillaev.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fas fa-desktop desktop'></i> Built and Designed by
            Lilla Varga
          </a>
        </StyledCodeInfo>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4rem;
`;

const StyledCodeInfo = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 2rem;

  a {
    color: rgba(163, 163, 163, 0.5);
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
    i {
      padding-right: 10px;
      font-size: 1.2rem;
    }
    .github {
      font-size: 1.6rem;
    }
    &:hover {
      color: var(--main);
      transition: 350ms ease;
    }
  }
`;

export default Footer;
