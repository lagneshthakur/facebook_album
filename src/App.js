import React, { Component } from 'react';
import Albums from './container-components/Albums';
import Photos from './container-components/Photos';
import User from './container-components/User';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserAlbumWrapper extends Component {
  render(){
    return (
      <div className="App">
        <div>
          <User />
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Albums />
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path="/" exact component={User} />
          <Route path="/albums" exact component={UserAlbumWrapper} />
          <Route path="/album/:id" component={Photos} />
          {/* <Route path="/list" component={} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
