import React, { useState } from "react";
import "./home.scss";

import { connect } from "react-redux";
import { setReload, updateToken, updateUser } from "../store/action";
import LoginApi from "../api/loginApi";
import { Link } from "react-router-dom";

const LoginPage = (props)=> {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  
  const sendData = async () => {
    if (email !== "" && password !== "" ) {
      const res = await LoginApi(email, password);

      if (!res || res.status!== 200) {
          alert("invalid login")
          
          return
      }
      console.log(res.data.token);
      props.updateUser({name:res.data.user, pictures:[], token:res.data.token})
      
      props.updateToken(res.data.token)
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
    <div className="homepage">
      <h1 ><span style={{color:"Violet"}}>Time</span>Table</h1>
      <p style={{marginLeft:"50px"}}>Email address</p>
      <input type="email"  style={{backgroundColor:"rgb(232, 240, 254)"}}
        placeholder="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
      <p style={{marginLeft:"50px"}}>Password</p>
      <input style={{backgroundColor:"rgb(232, 240, 254)"}}
      type='password'
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      ></input>
      
      <button onClick={sendData}>Login</button>

      <Link to='/signup'>Sign up</Link>
      <Link to='/forgotpassword'>Forgot your password ?</Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
