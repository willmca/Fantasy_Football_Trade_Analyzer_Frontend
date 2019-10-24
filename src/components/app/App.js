import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import Analyzer from './../analyzer/Analyzer'
import Results from '../results/Results';
import About from '../about/About';

const NFLHeader = styled.header`
  background-color: rgba(5,36,86,1);
  height:70px; 
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top:0;
  color:white;
`
const NFLFooter = styled.footer`
  background-color: rgba(5,36,86,1);
  height:35px; 
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  bottom:0;
  color:white;
`




class App extends Component {
  constructor(props){
    super(props)
    this.state={
        players:[]
    }
  }

  componentDidMount() {
    fetch("https://polar-chamber-40690.herokuapp.com/api/player").then(res=>res.json())
    .then(res => {
        // console.log(res)
        this.setState({players:res})
    })
    .catch(err =>
      alert("Failure to retreive data. Please refresh and try again")
    )}
  render(){
     return (
      <div className="App">
        <NFLHeader>
          <Link to="/" className="appTitleLink">
          <h1 className="appTitle">Fantasy Football Trade Analyzer</h1>
          </Link>
          <Link to="/about" className="aboutLink">
          </Link>
        </NFLHeader>
        <main>
          <Route path="/" exact render = {props => <Analyzer {...this.state} {...props}/>}/>
          <Route path="/results" exact render = {props => <Results {...props}/>}/>
          <Route path="/about" exact render = {props => <About {...props}/>}/>
        </main>
        <NFLFooter>
            <Link to="/" className="AboutLink">
              <h3>Home</h3>
            </Link>
              <h6>Updated 10/23/2019</h6>
            <Link to="/about" className="AboutLink">
              <h3>About</h3>
            </Link>
        </NFLFooter>
      </div>
  );
}
}

export default App;
