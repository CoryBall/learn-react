import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Header } from './components/navigation';
import CounterPage from './pages/counterPage';
import HomePage from './pages/homePage';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/counter" component={CounterPage} />
    </Router>
  );
}

export default App;
