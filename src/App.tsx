import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Header } from './components/navigation';
import AllCharactersPage from './pages/allCharactersPage';
import CharacterPage from './pages/characterPage';
import CounterPage from './pages/counterPage';
import DevExtremePage from './pages/devextreme';
import HomePage from './pages/homePage';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/characters" component={AllCharactersPage} />
      <Route path="/character/:id" component={CharacterPage} />
      <Route path="/devextreme" component={DevExtremePage} />
    </Router>
  );
}

export default App;
