import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { imgPath, bgPath } from '../api';
import unavailable from '../img/denise-jans-WevidclYpdc-unsplash.jpg';
import { addWatchlist } from '../actions/watchlistAction';
import useLocalStorage from '../hooks/useLocalStorage';
import Alert from '../components/Alert';
import { fadeIn } from '../animations';

const MovieDetail = ({ pathId }) => {
  const dispatch = useDispatch();
  const { movie, isLoading } = useSelector((state) => state.detail);
  const { favorites, favIds } = useSelector((state) => state.favorites);
  const [addFav, setAddFav] = useState([favorites]);
  //Toggle
  const [btnText, setBtnText] = useState('Add to Watchlist');
  const [isToggled, setIsToggled] = useLocalStorage('toggled', false);
  //Confirm Modal
  const [openAlert, setOpenAlert] = useState(false);

  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.goBack();
    }
  };

  const shorten = (text, max) => {
    return text && text.length > max
      ? text.slice(0, max).split(' ').slice(0, -1).join(' ')
      : text;
  };

  const toggleClass = () => {
    setIsToggled(!isToggled);
  };

  const changeText = (id) => {
    const check = favIds.find((id) => id === movie.id);
    check ? setBtnText('Added') : setBtnText('Add to Watchlist');
  };

  const addFavHandler = (movie) => {
    const checkMovie = favorites.find((fav) => fav.id === movie.id);

    if (!checkMovie) {
      dispatch(addWatchlist(movie));
      setAddFav([...addFav, movie]);
      setBtnText('Added');
    } else if (checkMovie) {
      setOpenAlert(true);
    } else {
      setOpenAlert(false);
    }
  };

  return (
    <>
      {!isLoading && (
        <StyledCard>
          <StyledDetails
            onLoad={() => changeText(movie.id)}
            className='shadow'
            variants={fadeIn}
            initial='hidden'
            animate='show'
            style={{
              backgroundImage: ` url("${bgPath}${movie.backdrop_path}")`,
              backGroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'multiply',
            }}
            onClick={exitDetailHandler}
          >
            {openAlert && (
              <Alert
                setOpenAlert={setOpenAlert}
                setAddFav={setAddFav}
                addFav={addFav}
                setBtnText={setBtnText}
              />
            )}
            <StyledInfo>
              <StyledMedia>
                <img
                  src={
                    movie.poster_path || movie.backdrop_path
                      ? `${imgPath}${movie.poster_path}`
                      : unavailable
                  }
                  alt='movie'
                />
              </StyledMedia>
              <StyledDescription>
                <div className='genre'>
                  <h3>{movie.title}</h3>
                  <p>
                    {movie.genres &&
                      movie.genres.map((genre) => (
                        <span key={genre.id}>{genre.name}</span>
                      ))}
                  </p>
                </div>
                <div className='stats'>
                  <p>
                    Release Date: <br />{' '}
                    <span>
                      {' '}
                      {movie.release_date ? movie.release_date : ` N / A`}{' '}
                    </span>
                  </p>
                  <p>
                    Rating: <br /> <span> {movie.vote_average} </span>
                  </p>
                  <p>
                    Runtime: <br /> <span>{movie.runtime} min</span>
                  </p>
                </div>
                <div className='synopsys'>
                  <p>
                    {shorten(`${movie.overview}`, 260)}
                    ...
                  </p>
                </div>
                <button
                  className={btnText === 'Added' ? 'added' : 'btn'}
                  id={movie.id}
                  key={movie.id}
                  value={movie.id}
                  type='submit'
                  onClick={() => {
                    toggleClass();
                    addFavHandler(movie);
                  }}
                >
                  {btnText}
                </button>
              </StyledDescription>
            </StyledInfo>
          </StyledDetails>
        </StyledCard>
      )}
    </>
  );
};

const StyledCard = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const StyledDetails = styled(motion.div)`
  width: 100vw;
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  background-color: white;
  color: white;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: 100vh;
`;

const StyledInfo = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  width: 80vw;
  margin: 0px auto;
  height: 500px;
  @media (max-width: 1199px) {
    align-items: center;
    width: 90vw;
    height: 90%;
  }

  @media (max-width: 992px) and (orientation: landscape) {
    height: 360px;
    width: 90vw;
    img {
      width: 80%;
    }
  }
  @media (max-width: 768px) and (orientation: landscape) {
    height: 350px;
    width: 90vw;
    img {
      width: 100%;
    }
  }
  @media (max-width: 768px) and (orientation: portrait) {
    flex-direction: column;
    width: 95vw;
  }
  @media (max-width: 600px) and (orientation: landscape) {
    height: 300px;
  }
  @media (max-width: 320px) and (orientation: portrait) {
    height: 450px;
  }
  @media (min-width: 1920px) {
    width: 50vw;
  }
  @media (min-width: 2100px) {
    width: 40vw;
  }
`;

const StyledMedia = styled(motion.div)`
  display: flex;
  img {
    max-width: 300px;
    width: 30vw;
    object-fit: cover;
    padding: 0.5rem;
  }
  @media (max-width: 992px) and (orientation: landscape) {
    img {
      width: 25vw;
    }
  }
  @media (max-width: 768px) and (orientation: portrait) {
    justify-content: center;
    img {
      width: 40%;
    }
  }
`;

const StyledDescription = styled(motion.div)`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0.5rem;
  margin: 0px auto;
  h3 {
    font-size: 1.6rem;
    margin: 0.5rem;
    @media (max-width: 500px) and (orientation: landscape) {
      font-size: 1.3rem;
    }
  }
  h4 {
    font-size: 1.5rem;
  }
  p {
    margin: 0px auto;
  }
  .synopsys {
    p {
      text-align: justify;
      width: 90%;
      font-size: 0.9rem;
      margin: 15px auto;
      @media (max-width: 320px) {
        font-size: 0.7rem;
      }
      @media (max-width: 600px) and (orientation: landscape) {
        font-size: 0.7rem;
      }
    }
  }
  .genre {
    text-align: center;
    width: 100%;
    p {
      padding: 0.1rem 0rem;
      font-weight: bold;
      font-size: 1.2rem;

      span {
        margin-left: 5px;
        padding-right: 5px;
        color: var(--main);
        font-weight: bold;
        font-size: 1rem;
      }

      @media (max-width: 768px) {
        span {
          font-size: 0.7rem;
        }
      }
      @media (max-width: 992px) and (orientation: landscape) {
        margin-bottom: 10px;
        height: 10px;
      }
      @media (max-width: 992px) and (orientation: landscape) {
        margin-bottom: 10px;
      }
    }
  }
  .stats {
    width: 100%;
    display: flex;
    font-weight: bold;
    margin-left: -35px;
    p {
      font-size: 1.2rem;
      align-self: center;
    }
    span {
      color: #8f39ff;
      @media (max-width: 768px) {
        font-size: 0.7rem;
      }
    }
    @media (min-width: 768px) and (max-width: 1199px) {
      height: 100px;
    }
    @media (max-width: 768px) {
      height: 30px;
    }
    @media (max-width: 992px) and (orientation: landscape) {
      margin-left: -25px;
      height: 100px;
    }
    @media (max-width: 992px) and (orientation: landscape) {
      margin: 15px;
    }
    @media (max-width: 500px) and (orientation: landscape) {
      margin: 10px;
    }
    @media (max-width: 768px) and (orientation: portrait) {
      margin-left: 0;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  .btn {
    background: var(--main);
    padding: 1rem;
    color: white;
    font-family: 'Montserrat', sans-serif;
    border: 2px solid transparent;
    font-weight: bolder;
    font-size: 1.1rem;
    width: 15rem;
    cursor: pointer;
    margin: 20px auto;
    &:hover {
      background: transparent;
      color: white;
      border: 2px solid var(--main);
      transition: all 350ms ease;
    }
    @media (max-width: 768px) {
      width: 15rem;
      font-size: 1rem;
    }
    @media (max-width: 768px) and (orientation: portrait) {
      font-size: 0.8rem;
      width: 12rem;
    }
    @media (max-width: 500px) and (orientation: landscape) {
      width: 10rem;
      font-size: 0.8rem;
    }
    @media (max-width: 320px) {
      margin-top: 10px;
    }
  }
  .added {
    background: transparent;
    border: 2px solid var(--main);
    padding: 1rem;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 1.1rem;
    width: 15rem;
    cursor: pointer;
    margin: 20px auto;
    @media (max-width: 768px) {
      width: 15rem;
      font-size: 1rem;
    }
    @media (max-width: 768px) and (orientation: portrait) {
      font-size: 0.8rem;
      width: 12rem;
    }
    @media (max-width: 500px) and (orientation: landscape) {
      margin: 10px;
    }
    @media (max-width: 320px) {
      margin-top: 10px;
    }
  }

  @media (max-width: 1199px) {
    .stats {
      p {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0rem;
    .stats {
      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export default MovieDetail;
