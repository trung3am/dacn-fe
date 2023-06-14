
import Home from "./home/home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import React from "react";
// import io from "socket.io-client";
import { connect } from "react-redux";
import Login from "./login/login";
import SignUp from "./signup/signup";
import Profile from "./profile/profile.js"
import UploadAvatar from "./profile/uploadavatar";
// import Footer from "./footer";
import Changepassword from "./changepassword/changepassword";
import Resetpassword from "./resetpassword/resetpassword";
import Newpassword from "./newpassword/newpassword";


// const socket = io.connect("https://trung-realtime-be.herokuapp.com");


const  App = (props ) => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render = {
            () => (props.user && props.user.name) ? (<Home/>) : (<Redirect to='/login'/>)
          }/>
          <Route path="/login"  render = {
            () => (props.user && props.user.name) ? (<Redirect to='/profile'/>) : (<Login />)
          }/>
          <Route path="/signup"  render = {
            () => (props.user && props.user.name) ? (<Redirect to='/profile'/>) : (<SignUp />)
          }/>
          <Route path="/forgotpassword"  render = {
            () => (props.user && props.user.name) ? (<Redirect to='/profile'/>) : (<Resetpassword />)
          }/>
          <Route path="/newpassword"  render = {
            () => (props.user && props.user.name) ? (<Redirect to='/profile'/>) : (<Newpassword />)
          }/>
          <Route path={"/changepassword"} exact render = {
            () => (props.user && props.user.name === null )? (<Redirect to="/"/>) : (<Changepassword/> )  
          } />
          <Route path={"/profile"} exact render = {
            () => props.token === null ? (<Redirect to="/"/>) : (<Profile /> )
          } />
          <Route path={"/editavatar"} exact render = {
            () => props.token === null ? (<Redirect to="/"/>) : (<UploadAvatar/> )
          } />
        </Switch>
      </div>
      {/* <footer>
          <Footer/>
        </footer> */}
    </Router>
  );
}

const mapStateToProps = (state) => {
  return{
    user : state.user.user,
    token: state.user.token
  }
}


export default connect(mapStateToProps)(App);
