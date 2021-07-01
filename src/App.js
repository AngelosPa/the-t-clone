import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cards from "./components/Cards";
import Messages from "./components/Messages";
import HeaderMenu from "./components/HeaderMenu";
import MessageContext from "./components/MessageContext";
import Data from "./Data.json";
import Profile from "./components/Profile";
import Login from "./components/Login";
// presentation :
//Hamza: introduce himself and his group -> +what the tinder makes talk about general overview of the application cards function and buttons
//Sergio: login page + general idea +demostrating the readme file
//Angelos : chat components(
//in the future we will give functionality by using databases ,
//useHistory hook,
// dataJson

//rubin : profile page slider

//HEY GUYS BASIC STRUCTURE + COMPONENTS ARE DONE!!! I  INSTALLED SOME PACKAGES, FIND HERE THE LINKS + COMMANDS AND DON'T FORGET TO INSTALL THEM BEFORE YOU START WORKING
// FOR SWIPE https://www.npmjs.com/package/react-tinder-card
// npm install --save react-tinder-card --legacy-peer-deps
// FOR THE ICONS (THANKS HAMZA)
//            npm install react-icons --save
//  for the effect when we press the buttons, Get the core
//           npm install @material-ui/core
//and then
//           npm install @material-ui/icons
// AND OF COURSE THE ROUTER
//           npm install react-router-dom
//rfce

function App() {
  return (
    <div className="body-container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/cards" exact>
            <HeaderMenu />
            <Cards />
          </Route>
          {/* the  : on the /:person means that any value goes there will be a valid url*/}
          <Route path="/messages/:person" exact>
            <HeaderMenu backButton="/messages" /> <MessageContext Data={Data} />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/messages">
            <HeaderMenu backButton="/cards" />
            <Messages />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
