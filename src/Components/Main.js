import React, { useEffect, useState } from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IoChevronBackOutline } from 'react-icons/io5';
import { fetchLeagues } from '../Redux/leaguesSlice/leaguesSlice';
import Leagues from './Leagues';
import './Main.css';
import Loader from './Loader';

const Main = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [target, setTarget] = useState('');
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
    if (!leagues.length) dispatch(fetchLeagues());
  }, [loader, dispatch, leagues.length]);

  if (loader) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <IoChevronBackOutline style={{ color: '#fff', opacity: '0', cursor: 'auto' }} />
        </Link>
        <p>Top teams</p>
        <div className="nav-icons">
          <FaSearch
            onClick={() => {
              setSearch(!search);
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      <div className="main-container">
        <p className="total">
          Total Available &nbsp; Leagues:
          {leagues.length}
        </p>
        <div className="lower-container">
          <div className="leagues-logos">
            {leagues.map((league) => (
              <div key={league.id}>
                <img src={league.logo} alt={league.name} className="logo" />
              </div>
            ))}
          </div>
          <Link to="/Leagues">
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
          </Link>
        </div>
      </div>
      <Leagues target={target} search={search} setTarget={setTarget} />
    </>
  );
};

export default Main;
