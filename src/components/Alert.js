import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeWatchlist } from '../actions/watchlistAction';

function Alert({ setOpenAlert, setAddFav, addFav, setBtnText }) {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.detail);

  return (
    <StyledAlertBox>
      <div className='alert-container'>
        <div className='closeBtn-top'>
          <button onClick={() => setOpenAlert(false)}>X</button>
        </div>
        <div className='title'>
          <h1>Remove from Watchlist?</h1>
          <div className='confirm'>
            <button
              onClick={() => {
                setAddFav([...addFav]);
                setOpenAlert(false);
              }}
              className='cancel'
            >
              Cancel
            </button>
            <button
              onClick={() => {
                dispatch(removeWatchlist(movie));
                setBtnText('Add to Watchlist');
                setOpenAlert(false);
              }}
              className='yes'
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </StyledAlertBox>
  );
}

const StyledAlertBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  .alert-container {
    width: 500px;
    height: 270px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 1);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.5rem;
    .title {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      text-align: center;
      margin-top: 0.8rem;
    }
    .closeBtn-top {
      button {
        background: transparent;
        border: none;
        color: white;
        font-size: 1.3rem;
        cursor: pointer;
      }
    }
    .confirm {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 10rem;
      button {
        width: 10rem;
        padding: 0.8rem 1rem;
        margin: 0.5rem;
        cursor: pointer;
      }
      button.cancel {
        background: transparent;
        color: var(--main);
        font-weight: bold;
        font-size: 1.3rem;
        border: 2px solid var(--main);
      }
      button.yes {
        background: var(--main);
        color: white;
        font-weight: bold;
        font-size: 1.3rem;
        border: 2px solid transparent;
      }
    }
  }
`;

export default Alert;
