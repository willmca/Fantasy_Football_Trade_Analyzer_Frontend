import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import Analyzer from './../analyzer/Analyzer'

const NFLHeader = styled.header`
  background-color: rgba(5,36,86,1);
  height:100px; 
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

    }
  }
  render(){
     return (
      <div className="App">
        <NFLHeader>
          <h1>Fantasy Football Trade Analyzer</h1>
        </NFLHeader>
        <main>
          <Route path="/" exact render = {props => <Analyzer {...props}/>}/>
        </main>
      </div>
  );
}
}

export default App;
