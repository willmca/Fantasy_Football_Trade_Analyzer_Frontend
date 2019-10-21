import React, { Component } from 'react';
import './Analyzer.css'


class Analyzer extends Component {
    constructor(props){
      super(props)
      this.state={
  
      }
    }
    render(){
       return (
        <div className="AnalyzerContainer">
          <div className="teamsContainer">
          <div className="team">
            <h1 className="teamName">Team 1</h1>
            <form className="playersSelect">
              <input className="playerInput" type = "text" placeholder="Player 1"></input>
              <input className="playerInput" type = "text" placeholder="Player 2"></input>
              <input className="playerInput" type = "text" placeholder="Player 3"></input>
              <input className="playerInput" type = "text" placeholder="Player 4"></input>
            </form>
          </div>
          <div className="team">
            <h1 className="teamName">Team 2</h1>
            <form className="playersSelect">
              <input className="playerInput" type = "text" placeholder="Player 1"></input>
              <input className="playerInput" type = "text" placeholder="Player 2"></input>
              <input className="playerInput" type = "text" placeholder="Player 3"></input>
              <input className="playerInput" type = "text" placeholder="Player 4"></input>
            </form>
          </div>
        </div>
        <div className="getResults">Analyze Trade</div>
        <div className="results">
          <h3>Team _______ is getting the best of this trade, receiving players with a total rating of _______</h3>
        </div>
        </div>
    );
  }
  }


export default Analyzer