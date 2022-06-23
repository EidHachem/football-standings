import { Routes, Route } from 'react-router-dom';
import LeagueDetails from './Components/LeagueDetails';
import Main from './Components/Main';
import LeaguesList from './Components/LeaguesList';

function App() {
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
