import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  HomePage,
  SearchPage,
  BookPage,
  DetailPage,
  ComparePage
} from './pages';
import './styles';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/compare">
            <ComparePage />
          </Route>
          <Route path="/book">
            <BookPage />
          </Route>
          <Route path="/detail">
            <DetailPage />
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
