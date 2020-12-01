import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideo from './RecommendedVideo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Search';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path='/search/:searchTerm'>
            <div className="app_page">
              <Sidebar />
              <Search />
            </div> 
          </Route>
          <Route path='/'>
            <div className="app_page">
              <Sidebar />
              <RecommendedVideo path='/recommendedvideo'/>
            </div>
          </Route>
        </Switch> 
      </Router>
      
    </div>
  );
}

export default App;
