import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IoChevronBackOutline } from 'react-icons/io5';
import { fetchLeagues } from '../Redux/leaguesSlice/leaguesSlice';
import './LeaguesList.css';

const LeaguesList = () => {
  const leagues = useSelector((state) => state.leagues);
  const [search, setSearch] = useState(false);
  const [target, setTarget] = useState('');

  // eslint-disable-next-line max-len
  const filteredLeagues = leagues.filter((league) => league.name.toLowerCase().includes(target.toLowerCase()));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues());
  }, [dispatch]);

  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <IoChevronBackOutline style={{ color: '#fff' }} />
        </Link>
        <p>All Leagues</p>
        <div className="nav-icons">
          <FaSearch
            onClick={() => {
              setSearch(!search);
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      <div>
        <div className="league-list-container">
          <div className="total">
            Total teams:
            {leagues.length}
          </div>
          <div className="leagues-logos">
            {leagues.map((league) => (
              <div key={league.name}>
                <div>
                  <img src={league.logo} alt={league.name} className="logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="head">All available leagues</div>
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
        <div>
          {filteredLeagues.map((league) => (
            <div key={league.name} className="club-container">
              <div className="name-logo">
                <img src={league.logo} alt={league.name} />
                <p>{league.name}</p>
              </div>
              <div className="points-arrow">
                <BiRightArrowCircle />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default LeaguesList;
