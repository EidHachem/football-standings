import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagues } from '../Redux/leaguesSlice/leaguesSlice';
import { BiRightArrowCircle } from 'react-icons/bi';
import './Main.css';

const Main = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!leagues.length) dispatch(fetchLeagues());
  }, [dispatch, leagues.length]);

  return (
    <div className="main-container">
      <p className="total">Total Available Leagues: {leagues.length}</p>
      <div className="lower-container">
        <div className="leagues-logos">
          {leagues.map((league) => (
            <div key={league.id}>
              <img src={league.logo} alt={league.name} style={{ width: '25px', height: '25px' }} />
            </div>
          ))}
        </div>
        <BiRightArrowCircle
          className="main-icon"
          style={{
            width: '25px',
            height: '25px',
            color: '#fff',
            border: 'none',
            zIndex: '4',
            opacity: '1',
          }}
        />
      </div>
    </div>
  );
};

export default Main;
