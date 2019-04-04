import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Button from "./components/Button";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="hero is-fullheight">
          <Navbar />
          <Content />
          <Button />
        </div>
      </Provider>
    );
  }
}

export default App;
