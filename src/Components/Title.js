import React, { useState, useReducer, useEffect } from 'react';

const Title = () => {
  const [title, setTitle] = useState('Top Teams');
  const forceUpdate = useReducer(() => (window.location.pathname));

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setTitle('Top Teams');
        break;
      case '/Leagues':
        setTitle('All leagues');
        break;
      case '/:id':
        setTitle('Standings');
        break;
      default:
        setTitle('Standings');
    }
  }, [forceUpdate]);
  return (
    <p>{title}</p>
  );
};

export default Title;
