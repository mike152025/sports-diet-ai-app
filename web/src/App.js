import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/chatbot">Chatbot</Link></li>
            <li><Link to="/workout-planner">Workout Planner</Link></li>
            <li><Link to="/meal-planner">Meal Planner</Link></li>
            <li><Link to="/food-recognition">Food Recognition</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/dashboard"><h2>Dashboard</h2></Route>
          <Route path="/chatbot"><h2>Chatbot</h2></Route>
          <Route path="/workout-planner"><h2>Workout Planner</h2></Route>
          <Route path="/meal-planner"><h2>Meal Planner</h2></Route>
          <Route path="/food-recognition"><h2>Food Recognition</h2></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;