import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StartProject from './pages/StartProject';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start-project" element={<StartProject />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

