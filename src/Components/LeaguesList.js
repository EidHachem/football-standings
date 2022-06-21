import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { fetchLeagues } from '../Redux/leaguesSlice/leaguesSlice';
import './LeaguesList.css';

const LeaguesList = () => {
  const leagues = useSelector((state) => state.leagues);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues());
  }, [dispatch]);

  return (
    <>
      <div className="grid-container">
        <div>
          <h2>club</h2>
        </div>
        <div>
          Total teams:
          {' '}
          {leagues.length}
        </div>
        {leagues.map((league) => (
          <div key={league.name} className="club-container">
            <div className="name-logo">
              <img src={league.logo} alt={league.name} />
              <p>{league.name}</p>
            </div>
            <div className="points-arrow">
              <p>
                {leagues.length}
                {' '}
                teams
              </p>
              <BiRightArrowCircle />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default LeaguesList;
