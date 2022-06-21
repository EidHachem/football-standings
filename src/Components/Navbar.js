import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoChevronBackOutline, IoSettingsOutline } from 'react-icons/io5';
import { PropTypes } from 'prop-types';
import './Navbar.css';

const Navbar = (props) => {
  const { title } = props;

  return (
    <>
      <div className="nav-container">
        {window.location.pathname !== '/' && <Link to="/"><IoChevronBackOutline /></Link>}
        <p>{ title }</p>
        <div className="nav-icons">
          <FaMicrophone />
          <IoSettingsOutline />
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
