import logo from './logo.svg';
import './App.css';
import App1 from './testing';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import Routes from './Routes';
import Navigation from './components/Navbar/Navbar';
import { useState } from 'react';
import Reservation from './reservation';
function App() {
  const [data, setData] = useState();
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
    //     <Router history={browserHistory}>
    // <Switch>
    // <Route path ="/user">
    // <UserList /></Route>
    // <Route path ="/">
    // {/* <App1 /> */}
    // <Reservation />
    // </Route>
    // <Route path="/:id">
    // {/* <App1 /> */}
    // <Reservation/>
    // </Route>
    // </Switch>
    //     </Router>
  );
}

export default App;
