import "./changepassword.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut, setFromChat, updateCurrentRoom, updateUser } from "../store/action";
import ChangePasswordApi from "../api/changePasswordApi";
import { useState } from "react";

const ChangePasswordPage = (props)=> {
  const [oldpassword, setoldpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  
  const HandleChangePassword = async ()  => {
    if(oldpassword!=="" && newpassword!=="" && confirmpassword === newpassword && oldpassword!== newpassword ) {
      console.log(oldpassword);
      console.log(newpassword);
      console.log(confirmpassword);
      let res = await ChangePasswordApi(props.token,{currentPassword:oldpassword, newPassword:newpassword});
      console.log(res);
      if (!res || res.status !== 200) {
        alert("failed to change password");
        return;
      } else {
        alert("Password changed.");
      }
    } else {
      alert("invalid input");
    }
  }







  return (
    <div className="changepasswordpage">
      <h1><b>TimeTable</b></h1>
      <h3>Change Password</h3>
      <p style={{marginLeft:"0"}}><b>Current Password</b></p>
      <input style={{marginLeft:"0" }}  type="password" onChange={(e)=>setoldpassword(e.target.value)}></input>
      <p style={{marginLeft:"0"}}><b>New Password</b></p>
      <input style={{marginLeft:"0" }}  type="password"onChange={(e)=>setnewpassword(e.target.value)} ></input>
      <p style={{marginLeft:"0"}}><b>Confirm Password</b></p>
      <input style={{marginLeft:"0" }}  type="password" onChange={(e)=>setconfirmpassword(e.target.value)}></input>
      <button onClick={HandleChangePassword}>Submit</button>
      <Link to='/profile'>Back To Profile</Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return{
    updateUser : (user) => dispatch(updateUser(user)),
    updateCurrentRoom : (roomname) => dispatch(updateCurrentRoom(roomname)),
    logOut : () => dispatch(logOut()),
    setFromChat : () => dispatch(setFromChat())
  }
}

const mapStateToProps = (state) => {
    return {
        user : state.user.user,
        token : state.user.token
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChangePasswordPage);
