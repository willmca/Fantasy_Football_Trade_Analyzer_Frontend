import React, { Component } from 'react';
import './About.css'

class About extends Component {
    constructor(props){
        super(props)
     }
    render(){
        return(
            <div className="aboutContainer">
                    <h1 className="aboutTitle">About</h1>
                        <h2>Origin Story</h2>
                    <p>Fantasy Football trade analyzer is a project built by Software Engineer Will McAllister. Will has been playing Fantasy Football for most of his life and saw that most existing trade analyzers were either behind a paywall, or terrible. The goal of this project is to create a free-to-use trade analyzer that provides accurate, up to date ratings to users.</p>
                    <h2>Player Rating Forumla</h2>
                    <p>As of now, the trade analyzer does not account for a players existing team, and only evaluats the players in a vaccum. The player ratings used in the trade analyzer come from the following formula, which makes use of the rest-of-season PPR rankings from Fantasypros:</p>

                    <p>Y = player rating from 0.05 - 15
                    X = Player ranking according to fantasypros rest of season rankings

                    Formula:
                    Y = 15 - ((x-1) * 0.05)
                    </p>
                    <h2>Questions?</h2>
                    <p>If you have any questions or feedback regarding the project, I can be reached by email at mcallister.william.r@gmail.com</p>
            </div>
        )
    }
}

export default About
