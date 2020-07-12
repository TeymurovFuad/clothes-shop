import React from "react";
import HomePage from "./page/home/homepage.component";
import ShopPage from "./page/shop/shop.component";
import RegisterLogin from "./page/register-login/register-login.component";
import Header from "./components/header/header.component";
import { Switch, Route /*, Link*/ } from "react-router-dom";
import "../src/styles/css/App.css";
import "../src/styles/css/header.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth, createUSerProfileDcument } from "./firebase/firebase.utils";

// const HatsPage = (props) => {
//   console.log("<HatsPage>");
//   console.log(props);
//   console.log("</HatsPage>");
//   return (
//     <div>
//       <Link to="/">Topic List</Link>
//       <h1>#1 Hats Page</h1>
//     </div>
//   );
// };

// const TopicList = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <button onClick={() => props.history.push("/topicList/2")}>
//         &gt;&gt;
//       </button>
//       <h1>#2 Topics List</h1>
//       <Link to={props.match.url + "/" + "2"}>Topic List: 2</Link> /
//       <Link to={props.match.url + "/" + "22"}>Topic List: 22</Link> /
//       <Link to={props.match.url + "/" + "222"}>Topic List: 222</Link>
//     </div>
//   );
// };

// const TopicDetails = (props) => {
//   console.log(props);
//   console.log(props.match.url);
//   return (
//     <div>
//       <span>{props.location.pathname}</span>
//       <h1>#3 Topic Detail: {props.match.params.ID}</h1>
//       <Link to={props.match.url + 2}>Topic List</Link> /
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUSerProfileDcument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <HomePage /> */}
        {/* https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/14974354#overview */}
        <Header currentUser={this.state.user} />
        <Switch>
          {/* <Route path="/topicList" component={TopicList} /> */}
          {/* <Route path="/topicList/:ID" component={TopicDetails} /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/register" component={RegisterLogin} />
          {/* <Route exact path="/shop/hats" component={HatsPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
