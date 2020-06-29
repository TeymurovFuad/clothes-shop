import React from "react";
import "./App.css";
import HomePage from "./page/home/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  );
};

const TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TopicList</h1>
    </div>
  );
};

const TopicDetails = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TopicDetails</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      {/* https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/14974354#overview */}
      {/* <Switch> */}
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route path="/" component={HatsPage} />
      <Route path="/TopicList" component={TopicList} />
      <Route path="/TopicList/:ID" component={TopicDetails} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
