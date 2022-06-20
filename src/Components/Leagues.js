import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagues } from '../Redux/leaguesSlice/leaguesSlice';
import { BiRightArrowCircle } from 'react-icons/bi';
import './Leagues.css';

const Leagues = () => {
  const leagues = useSelector((state) => state.leagues);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!leagues.length) dispatch(fetchLeagues());
  }, [dispatch, leagues.length]);

  return (
    <>
      <div className="grid-container">
        <div>
          <h2>International leagues</h2>
        </div>
        <div className="leagues">
          {leagues.map((league) => (
            <div className="league" key={league.id}>
              <div>
                <img src={league.logo} alt={league.name} className="image" />
              </div>
              <div className="upper-league">
                <BiRightArrowCircle
                  className="league-btn"
                  style={{
                    width: '25px',
                    height: '25px',
                    color: '#fff',
                    background: 'transparent',
                  }}
                />
                <p className="league-name">{league.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leagues;
