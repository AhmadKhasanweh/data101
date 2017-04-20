import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MongoDB from './MongoDB';
import MySQL from './MySQL';
import style from './style';

class Main extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-3" style={style.leftCol}>
              <Link to="/MongoDB" className="btn btn-success" style={style.Mongobtn}>
                MongoDB
              </Link>
            </div>
            <div className="col-md-6">
              <div style={style.midCol}>
                <h2>Pick up one</h2>
              </div>
            </div>
            <div className="col-md-3" style={style.rightCol}>
              <Link to="/MySQL" className="btn btn-primary" style={style.MySQLbtn}>
                MySQL
              </Link>
            </div>
          </div>
          <Route path='/MongoDB' component={ MongoDB }/>
          <Route path='/MySQL' component={ MySQL }/>
        </div>
      </Router>
    )
  }
}

export default Main;