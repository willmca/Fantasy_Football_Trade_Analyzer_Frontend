import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './Results.css'



class Results extends Component {
    constructor(props){
      super(props)
      this.state={
          tradeWinner : ""
      }
    }

    whoWon(){
      var tradeWinner 
      if (this.props.location.state.Team1Players.length > this.props.location.state.Team2Players.length){
        this.setState({tradeWinner:"Team 1"})
      } else if ((this.props.location.state.Team1Players.length < this.props.location.state.Team2Players.length)){
        this.setState({tradeWinner:"Team 2"})
      } else {
        this.setState({tradeWinner:"Neither team"})
      }
    }
  
    componentDidMount(){
      this.whoWon()
    }
    render(){
       return (
        <div className="ResultsContainer">
          <div className="teamsContainer">
          <div className="team">
            <h1 className="teamName">Team 1</h1>
            {this.props.location.state.Team1Players.map((player, i) => (
              <div key={i}>
                <h2>{player.name}</h2>
                <img src={player.photo} alt={player.name}/>
              </div>
            ) )}
          </div>
          <div className="team">
            <h1 className="teamName">Team 2</h1>
            {this.props.location.state.Team2Players.map((player, i) => (
              <div key={i}>
                <h2>{player.name}</h2>
                <img src={player.photo} alt={player.name}/>
              </div>
            ))}
          </div>
        </div>
        <div className="results">
          <h3>{this.state.tradeWinner} is getting the best of this trade, receiving players with a total rating of _______</h3>
          <Link to="/"><h4>Click here to analyze another trade</h4></Link>
        </div>
        </div>
    );
  }
  }


export default Results