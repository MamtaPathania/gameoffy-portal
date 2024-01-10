
import './App.css';
import CategoryPage from './components/CategoryPage';
import HomePage from "./components/HomePage";
import GameDetails from './components/GameDetails';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/games/:gameid" element={<GameDetails/>} />
          <Route path="/category/:categoryName" element={<CategoryPage/>} /> 
          <Route path="/search" element={<SearchBox/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

  