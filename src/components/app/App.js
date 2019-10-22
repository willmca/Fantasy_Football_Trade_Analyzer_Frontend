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



class App extends Component {
  constructor(props){
    super(props)
    this.state={
        players:[]
    }
  }

  componentDidMount() {
    fetch("https://secret-sea-08486.herokuapp.com/api/player").then(res=>res.json())
    .then(res => {
        console.log(res)
        this.setState({players:res})
    })}
  render(){
     return (
      <div className="App">
        <NFLHeader>
          <h1>Fantasy Football Trade Analyzer</h1>
        </NFLHeader>
        <main>
          <Route path="/" exact render = {props => <Analyzer {...this.state} {...props}/>}/>
          <Route path="/results" exact render = {props => <Results {...props}/>}/>
          <Route path="/about" exact render = {props => <About {...props}/>}/>
        </main>
      </div>
  );
}
}

export default App;
