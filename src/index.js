import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  Prompt
} from "react-router-dom";
import "./styles.css";

const Home = () => <div> Home </div>;
const navHome = () => <div> Nav Link Home </div>;
const About = () => <div> About US </div>;
const navAbout = () => <div> Nav About US </div>;
const Error = () => <div> Invalid Page. </div>;
const Users = ({ match, location, history }) => {
  console.log(match);
  console.log(location);
  console.log(history);
  var userId = match.params.idl;
  var validUsers = ["abc", "xyz"];
  if (!validUsers.includes(userId)) {
    return <Redirect to="/error" />;
  }
  return <div> Id Param : {match.params.id} </div>;
};
const DefaultComponent = () => (
  <div> This is Default Component while using the Switch</div>
);

var style = { color: "red" };

const activeEvent = (match, location) => {
  if (!match) {
    return false;
  }
  console.log(" Link has been activated " + match.url);
};

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/home"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About US </Link>
          </li>
          <li>
            <Link to="/users/123"> Users </Link>
          </li>
          <hr />
          <li>
            <NavLink to="/navhome" activeStyle={style}>
              Nav Link Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/navabout" activeStyle={style}>
              About US
            </NavLink>
          </li>
          <li>
            <NavLink isActive={activeEvent} to="/users/143" activeStyle={style}>
              Users
            </NavLink>
          </li>
        </ul>
        <hr />
        {/* <Switch> */}
        <Route path="/home" component={Home} />
        <Route path="/navhome" component={navHome} />
        <Route path="/navabout" component={navAbout} />
        <Route path="/about" render={() => <div> About from Inline</div>} />
        <Route path="/users/:id" component={Users} />
        <Route path="/error" component={Error} />
        <Prompt
          when={true}
          message="Are you Sure want to leave Page? Note :- but this will not work when you use Switch component"
        />
        {/* <Route children={() => <div> Always Rendered</div>} /> */}
        <Route component={DefaultComponent} />

        {/* </Switch> */}
      </div>
    </BrowserRouter>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// ex :=- https://d827u.codesandbox.io/home
