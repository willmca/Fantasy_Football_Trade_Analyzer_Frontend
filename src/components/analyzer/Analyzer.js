import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import './Analyzer.css'


class Analyzer extends Component {
    constructor(props){
      super(props)
      this.state={
        Team1Player1:'',
        Team1Player2:'',
        Team1Player3:'',
        Team1Player4:'',
        Team2Player1:'',
        Team2Player2:'',
        Team2Player3:'',
        Team2Player4:''
       }
       this.handleValueChange = this.handleValueChange.bind(this)
       this.getPlayers = this.getPlayers.bind(this)

    }
    handleValueChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
        [name]: value,
      })
    }

    render(){
       return (
        <div className="AnalyzerContainer">
          <div className="teamsContainer">
          <div className="team">
            <h1 className="teamName">Team 1</h1>
            <form className="playersSelect">
              <input name="Team1Player1" value={this.state.Team1Player1} onChange={this.handleValueChange} className="playerInput" type = "text" placeholder="Player 1"></input>
              <input name="Team1Player2" value={this.state.Team1Player2} onChange={this.handleValueChange} className="playerInput" type = "text" placeholder="Player 2"></input>
              <input name="Team1Player3" value={this.state.Team1Player3} onChange={this.handleValueChange} className="playerInput" type = "text" placeholder="Player 3"></input>
              <input name="Team1Player4" value={this.state.Team1Player4} onChange={this.handleValueChange} className="playerInput" type = "text" placeholder="Player 4"></input>
            </form>
          </div>
          <div className="team">
            <h1 className="teamName">Team 2</h1>
            <form className="playersSelect">
              <input name="Team2Player1" value={this.state.Team2Player1} onChange={this.handleValueChange} className="playerInput" type = "text" placeholder="Player 1"></input>
              <input name="Team2Player2" value={this.state.Team2Player2} onChange={this.handleValueChange} className="playerInput" type = "text" placeholder="Player 2"></input>
              <input name="Team2Player3" value={this.state.Team2Player3} onChange={this.handleValueChange} className="playerInput" type = "text" placeholder="Player 3"></input>
              <input name="Team2Player4" value={this.state.Team2Player4} onChange={this.handleValueChange} className="playerInput" type = "text" placeholder="Player 4"></input>
            </form>
          </div>
        </div>
        <Link to="/results">
        <div className="getResults" onClick={this.getPlayers}>Analyze Trade</div>
        </Link>
        </div>
    );
  }
  }


export default Analyzer