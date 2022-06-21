import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { fetchLeaguesDetails } from '../Redux/detailsSlice/detailsSlice';
import './LeagueDetails.css';

const LeagueDetails = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    dispatch(fetchLeaguesDetails(id));
  }, []);

  return (
    <>
      <div className="grid-container">
        <div>
          <h2>club</h2>
        </div>
        <div>
          Total teams:
          {' '}
          {details.length}
        </div>
        {details.map((club) => (
          <div key={club.name} className="club-container">
            <div className="name-logo">
              <img src={club.logo} alt={club.name} />
              <p>{club.name}</p>
            </div>
            <div className="points-arrow">
              <p>
                {club.rank}
                {' '}
                points
              </p>
              <BiRightArrowCircle />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeagueDetails;
