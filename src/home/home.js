// import React, { useState } from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setReload, updateCurrentRoom, updateUser } from "../store/action";

const Homepage = (props) => {



  const username = props.user.name

  if (props.isReloaded !== false) {
    props.setReload();
    window.location.reload();
  }

  return (
    <div className="dashboard">
      <div className="header">
        <div style={{width:"65rem"}}><h1>
          <span style={{ color: "Violet" }}>Time </span><span >Table</span>
          
        </h1></div>
         
        <Link to='/profile'><img src={require('../option.png')} alt="asd" width={"150rem"}></img></Link>
      </div>
      <div className="body">
        <div className="left"> 
          <button style={{background:"#4F4F4F"}}><b>📰 Overview</b></button>
          <button ><b>📈 Analytics</b></button>
          <button ><b>📆 Calendar</b></button>
          <button ><b>📡 Task Location</b></button>
          <div style={{marginTop:"15rem" ,display:"flex"}}>
          <img src={require('../profile/user-img.jpg')} alt="asd" height={"40rem"} margin="0"></img>
          <h4 style={{marginLeft:".1rem", marginTop:".7rem",width:"10rem" , fontSize:".7rem"}} ><b>{username}</b></h4>
          </div>
        </div>
        <div className="right">
          <h1 style={{color:"blue"}}>Task: My Day</h1>
          <p style={{color:"red"}}>Thursday 15 June</p>
          <br></br>
          <div style={{backgroundImage:`url("https://assets.euromoneydigital.com/dims4/default/70b1b0b/2147483647/strip/true/crop/800x476+0+0/resize/840x500!/quality/90/?url=http%3A%2F%2Feuromoney-brightspot.s3.amazonaws.com%2F23%2F11%2Fba7ea337537278b7ff906c7eddfd%2Fchina5.jpg")` 
        ,backgroundSize:"100% 100%" ,width:"99%", height:"90%"}}>
            <div style={{padding:"1rem"}}>
            <div className="myDIV">
            <div style={{backgroundColor:"#89E894", borderRadius:"25px", margin:"auto", width:"17rem" ,height:"100%" }}>
              <h2 style={{margin:"1rem 1rem 1rem 7rem"}}><b>9:00-10:00</b></h2>
            </div>
            <div style={{backgroundColor:"#89E894", borderRadius:"25px", margin:"auto", width:"25rem" ,height:"100%" }}>
              <h3 style={{margin:"1rem 0rem 0rem 3rem"}}><b>Coffee with Dove</b></h3>
              <p style={{margin:"0rem 0rem 0rem 3rem", color:"gray"}}>To do list to do list...</p>
            </div>
            </div>
            </div>

            <div style={{padding:"1rem"}}>
            <div className="myDIV">
            <div style={{backgroundColor:"#89E894", borderRadius:"25px", margin:"auto", width:"17rem" ,height:"100%" }}>
              <h2 style={{margin:"1rem 1rem 1rem 7rem"}}><b>14:00-15:30</b></h2>
            </div>
            <div style={{backgroundColor:"#89E894", borderRadius:"25px", margin:"auto", width:"25rem" ,height:"100%" }}>
              <h3 style={{margin:"1rem 0rem 0rem 3rem"}}><b>Meeting with PIP Department</b></h3>
              <p style={{margin:"0rem 0rem 0rem 3rem", color:"gray"}}>To do list to do list...</p>
            </div>
            </div>
            </div>
            <div style={{padding:"1rem", marginTop:"6rem"}}>
            <div className="myDIV">

            <input style={{width:"45rem"}} placeholder="🔍 Search"></input>
            </div>
            </div>
            
        </div>
          
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isReloaded: state.user.isReloaded,
    user: state.user.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    updateCurrentRoom: (roomname) => dispatch(updateCurrentRoom(roomname)),
    setReload: () => dispatch(setReload()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
