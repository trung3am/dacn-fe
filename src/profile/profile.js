import "./profile.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut, setFromChat, updateCurrentRoom, updateUser } from "../store/action";

// import { useState } from "react";
// import UpLoadPictureApi from "../api/uploadpictureApi";
// import GetUserProfileApi from "../api/getuserprofileApi";

// import { serverUrl } from '../api/link';
const ProfilePage = (props)=> {
  // const [file, setfile] = useState(null)
  const username = props.user.name
  


  // const uploadPhoto = async () => {
  //   if (file===null) {
  //     alert("please select picture for upload")
  //     return
  //   }
  //   if (!file[0].name.match(/\.(jpg|png|jpeg)$/)) {
  //     alert("Please upload png/jpg/jpeg file")
  //     return
  //   }
  //   const res = await UpLoadPictureApi(file,props.token)
  //   if (res && res.status === 201) {
      
  //     const userProfile = await GetUserProfileApi(props.token)
  //     alert("upload complete")
  //     props.updateUser(userProfile.data)
  //     return 
  //   }
  //   alert("failed to upload new picture")
  // }

  const handleLogout = async () => {

      props.logOut()
      return
  }



  return (
    <div className="profilepage">
      <h1 style={{marginLeft:"0px"}}>Update Profile</h1>
      <img src = {require('./user-img.jpg')} className="main-ava" alt="avav"/>
      <button  className="center"  style={{height:"1rem", width:"15rem", color:"orange", backgroundColor:"white" ,fontWeight: 'bold'}}>Tap to upload new image</button>
           {/* <div ><input className="center" style={{background:"rgb(231, 228, 228)", height:"2rem"}} type='file' onChange={(e)=>setfile(e.target.files)}/>

          <button  className="center" onClick={uploadPhoto}>Change avatar</button></div>
           */}
           <p style={{marginLeft:"5px"}}>Email</p>
          <input style={{background:"rgb(231, 228, 228)", height:"3rem", width:"27rem"}}
      type='text'
        // placeholder="password"
        value={username}
        disabled={true}
      ></input>
      <Link to='/changepassword'>Change Password</Link>
    
      <button  className="center"  onClick={handleLogout} >Sign out</button>

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

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage);
