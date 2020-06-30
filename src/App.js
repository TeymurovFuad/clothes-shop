import React from "react";
import "./App.css";
import HomePage from "./page/home/homepage.component";
import { Switch, Route, Link } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="topicList">Topic List</Link>
      <h1>#1 Hats Page</h1>
    </div>
  );
};

const TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/topicList/2")}>
        &gt;&gt;
      </button>
      <h1>#2 Topics List</h1>
      <Link to={props.match.url + "/" + "2"}>Topic List: 2</Link> /
      <Link to={props.match.url + "/" + "22"}>Topic List: 22</Link> /
      <Link to={props.match.url + "/" + "222"}>Topic List: 222</Link>
    </div>
  );
};

const TopicDetails = (props) => {
  console.log(props);
  console.log(props.match.url);
  return (
    <div>
      <span>{props.location.pathname}</span>
      <h1>#3 Topic Detail: {props.match.params.ID}</h1>
      <Link to={props.match.url + 2}>Topic List</Link> /
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      {/* https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/14974354#overview */}
      {/* <Switch> */}
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route path="/" component={HatsPage} />
      <Route path="/topicList" component={TopicList} />
      <Route path="/topicList/:ID" component={TopicDetails} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
