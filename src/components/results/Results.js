import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Results.css'



class Results extends Component {
    constructor(props){
      super(props)
      this.state={
          tradeWinner : "",
      }
    }
    whoWon(){
      var team1Total = this.props.location.state.team1Sum
      var team2Total = this.props.location.state.team2Sum
      if (team1Total > team2Total){
        this.setState({tradeWinner:`Team 1 is the stronger side of this trade by ${team1Total - team2Total} points.`})
      } else if ((team1Total < team2Total)){
        this.setState({tradeWinner:`Team 2 is the stronger side of this trade by ${team2Total - team1Total} points.`})
      } else {
        this.setState({tradeWinner:"This is an equal trade."})
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
                <h2>{player.Name}</h2>
                <h3>{player.Position}, {player.Team}</h3>
                <img src={player.PhotoURL} alt={player.Name}/>
                <h4>{player.Rating}</h4>
              </div>
            ) )}
            <h1>Total rating: {this.props.location.state.team1Sum}</h1>
          </div>
          <div className="team">
            <h1 className="teamName">Team 2</h1>
            {this.props.location.state.Team2Players.map((player, i) => (
              <div key={i}>
                <h2>{player.Name}</h2>
                <h3>{player.Position}, {player.Team}</h3>
                <img src={player.PhotoURL} alt={player.Name}/>
                <h4>{player.Rating}</h4>
              </div>
            ))}
            <h1>Total rating: {this.props.location.state.team2Sum}</h1>
          </div>
        </div>
        <div className="results">
          <h3>{this.state.tradeWinner}</h3>
          <Link to="/"><h4>Click here to analyze another trade</h4></Link>
        </div>
        </div>
    );
  }
  }


export default Results