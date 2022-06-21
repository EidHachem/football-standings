import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LeagueDetails from './Components/LeagueDetails';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import LeaguesList from './Components/LeaguesList';

function App() {
  const [title, setTitle] = useState('Top Teams');

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setTitle('Top Teams');
        break;
      case '/Leagues':
        setTitle('All leagues');
        break;
      default:
        setTitle('Top Teams');
    }
  });

  return (
    <div>
      <Navbar title={title} />
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/leagues" element={<LeaguesList />} />
        <Route path="/:id" element={<LeagueDetails />} />
      </Routes>
    </div>
  );
}

export default App;
