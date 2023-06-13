import React, { useState } from "react";
import "./home.scss";

import { connect } from "react-redux";
import { setReload, updateToken, updateUser } from "../store/action";

import { Link } from "react-router-dom";
import ResetPasswordApi from "../api/resetPasswordApi";

const ResetPasswordPage = (props)=> {
  const [email, setemail] = useState("");


  
  const sendData = async () => {
    if (email !== "" ) {
      const res = await ResetPasswordApi(email);

      if (!res || res.status!== 200) {
          alert("invalid email address")
          
          return
      }

      alert("please check your email for reset password link");
    } else {
      alert("email are must !");
      window.location.reload();
    }
  };

  if (props.isReloaded !== false) {
    props.setReload()
    window.location.reload()
  }

  return (
    <div className="resetpasswordpage">
      <h1 ><span style={{color:"Violet"}}>Time</span>Table</h1>
      <h4><b>Forgot Password</b></h4>
      <p style={{marginLeft:"50px"}}>Email address</p>
      <input type="email"  style={{backgroundColor:"rgb(232, 240, 254)"}}
        placeholder="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>

      
      <button onClick={sendData}>Reset Password</button>

      <Link to='/login'>Back to Login</Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return{
    updateUser : (user) => dispatch(updateUser(user)),
    // updateCurrentRoom : (roomname) => dispatch(updateCurrentRoom(roomname)),
    updateToken : (token) => dispatch(updateToken(token)),
    setReload : () => dispatch(setReload())
  }
}

const mapStateToProps = (state) => {
  return {
    isReloaded: state.user.isReloaded
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ResetPasswordPage);
