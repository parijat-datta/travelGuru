import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './component/Slider/Slider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import SliderDescription from './component/Slider/SliderDescription';
import Login from './component/Slider/Login/Login';
import LocationDetail from './component/Slider/LocationDetail/LocationDetail';
import Error from './component/Slider/Error/Error';
import BookRoom from './component/Slider/BookRoom/BookRoom';
import PrivateRoute from './component/Slider/PrivateRoute/PrivateRoute';
import { Nav } from 'react-bootstrap';
import AllLocation from './component/Slider/AllLocation/AllLocation';
import Footer from './component/Slider/Footer/Footer';




export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({
    name:'',
    email:''
  });

  const handleLogOut=()=>{
   const newUser={...loggedInUser};
   newUser.name="";
    newUser.email="";
    setLoggedInUser(newUser);

  }

  const listStyle={
    fontSize:'20px',
    color:'black',
    marginLeft:'15px',
    padding:'10px',
    marginTop:"35px"
  }
  

  
  return (
 <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
   
   
<Router>
      <div className="d-flex flex-wrap flex-column">
   <div style={{paddingTop:'5px',paddingBottom:'5px',maxWidth:"100%"}} className="navbar-nav " >      <ul className="ml-auto d-flex flex-wrap justify-content-center flex-row"  style={{display: 'flex',flexDirection: 'row', listStyle: 'none',margin:'auto'}} >
        <li style={{margin:'auto'}}>
         <img className="img-responsive ml-auto" style={{width:'40%'}} src="https://i.ibb.co/JCfzhQy/Logo.png" alt=""></img>

        </li>
          <li style={listStyle}>
            <Link to="/home">Home</Link>
          </li>
          <li style={listStyle}>
            <Link to="/login">Login</Link>
          </li>
       
          <li style={listStyle}>
            <Link to="/allLocation">Locations</Link>
          </li>
           <li style={listStyle}><p>Welcome: {loggedInUser.name}</p></li>
          { loggedInUser.email && <li style={listStyle}><button style={{backgroundImage:"linear-gradient(30deg,red,purple)",color:"white",fontSize:"14px",fontWeight:"bold"}} onClick={()=>handleLogOut()}>Log Out</button></li>}
          
        </ul></div>

       
        
        <Switch>
          <Route path="/home">
            <Slider />
          </Route>
          <Route path ="nav">
            <Nav></Nav>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/locationdetail/:locationID">
            <LocationDetail />
          </Route>
        <Route path="/allLocation">
           <AllLocation></AllLocation>
          </Route>
           <Route path="/locationdetail">
            <LocationDetail />
          </Route> 
          <PrivateRoute path="/bookRoom/:newId">
          <BookRoom></BookRoom>

          </PrivateRoute>
          <Route exact path="/">
            <Slider></Slider>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
