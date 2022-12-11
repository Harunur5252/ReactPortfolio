import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoute from './router/AppRoute';
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render () {
      return (
        <BrowserRouter>
            <AppRoute/>
        </BrowserRouter>
      );
  }
}

export default App;
