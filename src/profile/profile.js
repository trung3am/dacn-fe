import "./profile.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut, setFromChat, updateCurrentRoom, updateUser } from "../store/action";


const ProfilePage = (props)=> {

  const username = props.user.name
  


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
