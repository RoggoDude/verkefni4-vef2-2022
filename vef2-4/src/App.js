import './App.css';
import { render } from "react-dom";
import {Link} from 'react-router-dom';
import Events from './components/Events/events';

const WEB_SERVICE = "https://vef2-20222-v3-synilausn.herokuapp.com/"

function App() {
  return (
    <Link to="/events">Events</Link>

  );
}

export default App;
