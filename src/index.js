import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Click form Click
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './ui/Main.js';
import EmployeeList from './employee/EmployeeList.js';
import ProductList from './product/ProductList.js';
import Page from './product/Page';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#29b6f6',
    },
    secondary: {
      main: '#81c784',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/product" component={ProductList}/>
        <Route path="/employee" component={EmployeeList}/>
        <Route path="/page" component={Page}/>
      </Switch>
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
