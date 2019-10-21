import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './Results.css'


class Results extends Component {
    constructor(props){
      super(props)
      this.state={
  
      }
    }
    render(){
       return (
        <div className="ResultsContainer">
          <div className="teamsContainer">
          <div className="team">
            <h1 className="teamName">Team 1</h1>
          </div>
          <div className="team">
            <h1 className="teamName">Team 2</h1>
          </div>
        </div>
        <div className="results">
          <h3>Team _______ is getting the best of this trade, receiving players with a total rating of _______</h3>
          <Link to="/"><h4>Click here to analyze another trade</h4></Link>
        </div>
        </div>
    );
  }
  }


export default Results