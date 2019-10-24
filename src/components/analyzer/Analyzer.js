import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Analyzer.css'



class Analyzer extends Component {
    constructor(props){
      super(props)
      this.state={
        Team1Player1:'',
        Team2Player1:'',
        Team1Players:[],
        Team2Players:[],
        team1Sum:0,
        team2Sum:0
       }
       this.handleValueChange = this.handleValueChange.bind(this)
       this.AddPlayerTeam1 = this.AddPlayerTeam1.bind(this)
       this.AddPlayerTeam2 = this.AddPlayerTeam2.bind(this)


    }
    handleValueChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
        [name]: value,
      })
        
    }

    AddPlayerTeam1(evt){
      evt.preventDefault();
      var player = (this.props.players.find(player => player.Name.toLowerCase() === this.state.Team1Player1.trim().toLowerCase()))
      if (!player){
        alert("No player found with the name " + this.state.Team1Player1);
        return;
      }
      else{
      // console.log(player)
      let team1Sum = this.state.team1Sum
      this.state.Team1Players.push(player)
      this.setState({Team1Player1:""})
      this.setState({team1Sum: team1Sum += player.Rating})
      this.forceUpdate()
      }
    }

    AddPlayerTeam2(evt){
      evt.preventDefault();
      var player2 = (this.props.players.find(player => player.Name.toLowerCase() === this.state.Team2Player1.trim().toLowerCase()))
      if (!player2){
        alert("No player found with the name " + this.state.Team2Player1)
        return;
      }
      else{
      // console.log(player2)
      let team2Sum = this.state.team2Sum
      this.state.Team2Players.push(player2)
      this.setState({Team2Player1:""})
      this.setState({team2Sum: team2Sum += player2.Rating})
      this.forceUpdate()
      }
    }
    
    render(){
       return (
        <div className="AnalyzerContainer">
          <div className="teamsContainer">
          <div className="team">
            <h1 className="teamName">Team 1</h1>
            <form className="playersSelect">
              <input name="Team1Player1" value={this.state.Team1Player1} onChange={this.handleValueChange} className="playerInput" type = "text" placeholder="Add a player to Team 1"></input>
              <button className="addPlayer" onClick={this.AddPlayerTeam1}>Click to add player to team 1</button>
            </form>
            <section className="team2PlayerDisplay">
            {this.state.Team1Players.map((player, i) => (
              <div key={i}>
                <h2>{player.Name}</h2>
                <img src={player.PhotoURL} alt={player.Name}/>
                <h3>{player.Position}, {player.Team}</h3>
              </div>
            ))}
            </section>          
            </div>
          <div className="team">
            <h1 className="teamName">Team 2</h1>
            <form className="playersSelect">
              <input name="Team2Player1" value={this.state.Team2Player1} onChange={this.handleValueChange} className="playerInput" type = "text" placeholder="Add a player to Team 2"></input>
              <button className="addPlayer" onClick={this.AddPlayerTeam2}>Click to add player to team 2</button>
            </form>
            <section className="team2PlayerDisplay">
            {this.state.Team2Players.map((player, i) => (
              <div key={i}>
                <h2>{player.Name}</h2>
                <img src={player.PhotoURL} alt={player.Name}/>
                <h3>{player.Position}, {player.Team}</h3>
              </div>
            ))}
            </section>
          </div>
        </div>
        {this.state.Team2Players.length > 0 && this.state.Team1Players.length > 0 &&
        <Link 
    to={{ 
    pathname: '/results', 
    state: { ...this.state } 
    }}>
        <div className="getResults">Analyze Trade</div>
        </Link>
        }
        </div>
    );
  }
  }


export default Analyzer