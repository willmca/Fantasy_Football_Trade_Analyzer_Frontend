**Fantasy Football Trade Analyzer Front-End**

My Fantasy Football Trade Analyzer is a full-stack application that utilizes a front-end built in React and a back-end built with Express, Node, and Mongoose. As a Software Engineer and an avid fantasy football fan, this was the perfect project to combine my two passions. The application uses an algorithm I developed that converts FantasyPros' Rest of Season rankings into a player rating fom 0.05 to 15, and uses those player ratings to evaluate a trade.

**Build Status**

I plan on maintaining this project throughout the Fantasy Football Season, and each season going forward. The front-end will see small tweaks to improve the look, but the majority of the maintenance work will be done on the back end. At a minimum you can expect to see weekly updates to this repo to indicate that player ratings have been updated, but I plan on visually enhancing it as well.

**Known bugs/Planned fixes**

-Currently, player names must be spelled exactly correct for players to be found. I plan on changing this to allow for misspellings
-Currently, player names must be fully typed in by the user. I plan on implementing an auto-complete feature that will suggest player names as the user types
-Currently, I am manually updating player ratings each week. To keep things doable I am only using the top 300 players according to FantasyPros rankings and only updating ratings each week. I have plans to utilize a web scraper to help with the process of updating rankings which would result in more players being included in the player pool and more frequent updates.

**Links**

Deployed Application: https://fantasy-football-trade-analyzer.netlify.com/
Back-end Repo: https://github.com/willmca/Fantasy_Football_Trade_Analyzer_Backend
