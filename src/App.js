import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LeagueDetails from './Components/LeagueDetails';
import Main from './Components/Main';
import LeaguesList from './Components/LeaguesList';
import Loader from './Components/Loader';
import './index.css';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, [loader]);

  if (loader) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/leagues" element={<LeaguesList />} />
        <Route path="/:id" element={<LeagueDetails />} />
      </Routes>
    </div>
  );
}

export default App;
