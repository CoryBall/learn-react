import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Header } from './components/navigation';
import CounterPage from './pages/counterPage';
import HomePage from './pages/homePage';


function App() {
  return (
    <Router>
      <Header />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Route path="/" exact component={HomePage} />
        <Route path="/counter" component={CounterPage} />
      </div>
    </Router>
  );
}

export default App;
