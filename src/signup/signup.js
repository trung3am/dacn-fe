import React, { useState } from "react";
import "./home.scss";

import { connect } from "react-redux";
import { setReload, updateCurrentRoom, updateToken, updateUser } from "../store/action";
import SignUpApi from "../api/signupApi";
import { Link } from "react-router-dom";


const SignUpPage = (props)=> {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");


  
  
  const sendData = async () => {
    if (email !== "" && password !== ""  ) {
      const res = await SignUpApi( email, password);

      if (!res || res.status!== 201) {
          alert("invalid signup")
          
          return
      }

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

      <p>Email </p>
      <input style={{backgroundColor:"rgb(232, 240, 254)"}}
       type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
      <p>Password </p>
      <input style={{backgroundColor:"rgb(232, 240, 254)"}}
      type='password'
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      ></input>
      <p>Confirm Password </p>
      <input style={{backgroundColor:"rgb(232, 240, 254)"}}
      type='password'
        placeholder="confirm password"
        value={confirmpassword}
        onChange={(e) => setconfirmpassword(e.target.value)}
      ></input>
      
      <button onClick={sendData}>Sign up</button>
      <Link to='/login'>Back to Login</Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isReloaded: state.user.isReloaded
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    updateUser : (user) => dispatch(updateUser(user)),
    updateCurrentRoom : (roomname) => dispatch(updateCurrentRoom(roomname)),
    updateToken : (token) => dispatch(updateToken(token)),
    setReload : () => dispatch(setReload())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage);
