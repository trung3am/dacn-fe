import React, { useState } from "react";
import "./home.scss";

import { connect } from "react-redux";
import { setReload, updateToken, updateUser, updateResetUser, removeResetUser } from "../store/action";

import { Link } from "react-router-dom";
import VerifySecretApi from "../api/verifySecretApi";
import NewPasswordApi from "../api/newPasswordApi";

const NewPasswordPage = (props)=> {
  const [password, setpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  let email = props.resetUser
  let secret = window.location.search.replace("?key=","");
  
  const check = async () => {

    console.log(secret);
    try {
      let res = await VerifySecretApi(secret);
      if (!res || res.status!==200) {
        window.location.replace("http://localhost:3000/login");
        console.log(res);
      }
      email = res.data.email;
      console.log(email);
      props.updateResetUser(res.data.email);
    } catch (error) {
      console.log(error);
    }
  }
check();
  const sendData = async () => {
    if (email !== "" && password !== "" && password === newpassword) {
      const res = await NewPasswordApi(email, password, secret);

      if (!res || res.status!== 200) {
          alert("fail to reset password")
          
          return
      }
      console.log(res.data);
      alert("Reset password success!")
      window.location.replace("http://localhost:3000/login");
    } else {
      alert("password are must !");
      // window.location.reload();
    }
  };

  if (props.isReloaded !== false) {
    props.setReload()
    window.location.reload()
  }

  return (
    <div className="newpasswordpage">
      <h1 ><span style={{color:"Violet"}}>Time</span>Table</h1>
      <h4><b>Reset Password</b></h4>

      <p style={{marginLeft:"50px"}}>Password</p>
      <input style={{backgroundColor:"rgb(232, 240, 254)"}}
      type='password'
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      ></input>
            <p style={{marginLeft:"50px"}}>Confirm Password</p>
      <input style={{backgroundColor:"rgb(232, 240, 254)"}}
      type='password'
        placeholder="confirm password"
        value={newpassword}
        onChange={(e) => setnewpassword(e.target.value)}
      ></input>
      <button onClick={sendData}>Reset Password</button>

      <Link to='/signup'>Sign up</Link>
      
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return{
    updateUser : (user) => dispatch(updateUser(user)),
    // updateCurrentRoom : (roomname) => dispatch(updateCurrentRoom(roomname)),
    updateToken : (token) => dispatch(updateToken(token)),
    updateResetUser: (user) => dispatch(updateResetUser(user)),
    removeResetUser: () => dispatch(removeResetUser()),
    setReload : () => dispatch(setReload())
  }
}

const mapStateToProps = (state) => {
  return {
    isReloaded: state.user.isReloaded,
    resetUser: state.user.resetUser
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPasswordPage);
