import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Tags from "./components/Tags";
import Users from "./components/Users";

import StackOverflow from "./components/StackOverflow";
import Header from "./components/Header";
import AddQuestion from "./components/AddQuestion";
import ViewQuestion from "./components/ViewQuestion";
import Auth from "./components/Auth";

import ProfilePage from "./components/Profile";
import Activities from "./components/Profile/Activities";
import Questionstab from "./components/Profile/Activities/Questions/Questionstab";
import UserTags from "./components/Profile/Activities/UserTags/UserTags";
import ActivityBadges from "./components/Profile/Activities/ActivityBadges/ActivityBadges";
import Bookmarkstab from "./components/Profile/Activities/Bookmarkstab/Bookmarkstab";
import Reputation from "./components/Profile/Activities/Reputation/Reputation";
import UserDetails from "./components/Profile/UserDetails/UserDetails";

import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./feature/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);

  // const PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       user ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/auth",
  //             state: {
  //               from: props.location,
  //             },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={StackOverflow} />

          <Route exact path="/tags" component={Tags} />
          <Route exact path="/users" component={Users} />

          <Route exact path="/auth" component={Auth} />
          <Route exact path="/addquestion" component={AddQuestion} />
          <Route exact path="/question" component={ViewQuestion} />

          <Route exact path="/userprofile" component={ProfilePage} />
          <Route exact path="/activities" component={Activities} />

          <Route path="/questionstab">
            <Questionstab />
          </Route>
          <Route path="/usertags">
            <UserTags />
          </Route>
          <Route path="/activitybadges">
            <ActivityBadges />
          </Route>
          <Route path="/bookmarkstab">
            <Bookmarkstab />
          </Route>
          <Route path="/userdetails">
            <UserDetails />
          </Route>
          <Route path="/reputation">
            <Reputation />
          </Route>

          {/* <PrivateRoute exact path="/" component={StackOverflow} />
          <PrivateRoute exact path="/addquestion" component={AddQuestion} />
          <PrivateRoute exact path="/question" component={ViewQuestion} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
