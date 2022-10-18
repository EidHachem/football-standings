/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { fetchLeagues } from '../Redux/leaguesSlice/leaguesSlice';
import './Leagues.css';

const Leagues = ({ target, search, setTarget }) => {
  const leagues = useSelector((state) => state.leagues);

  // eslint-disable-next-line max-len
  const filteredLeagues = leagues.filter((league) => league.name.toLowerCase().includes(target.toLowerCase()));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues());
  }, [dispatch]);

  return (
    <>
      <div className="grid-container">
        <div>
          <h2>International leagues</h2>
        </div>
        {search && (
          <div className="search-container">
            <input
              type="text"
              placeholder="search by leauge name"
              className="search"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            />
          </div>
        )}
        <div className="leagues">
          {filteredLeagues.slice(0, leagues.length - 1).map((league) => (
            <div className="league main-league" key={league.id}>
              <Link key={league.id} to={`/${league.id}`} state={{ id: league.id }}>
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leagues;
