import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Carousel from 'react-bootstrap/Carousel'
import SliderDescription from './SliderDescription';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


const Slider = () => {
    const [location,setLocation]=useState(fakeData);
   
   
    
    return (
        <div className="container"
        

        style={{
        backgroundColor:"transparent",
        width: "100%",
        



        }}
        
        
        >
            
               <div className="row">


            
             <div className="col-md-12">

             <Carousel>
                    
                    {
  
                      location.map(location=>
                       
                          
                          <Carousel.Item>

                             
      <img 
        className="d-block w-100 "
        src={location.picture}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{location.location}</h3>
        {/* <p>{location.shortTitle}</p> */}
        <Link to={`/locationdetail/${location.id}`}> <button className="btn btn-danger">Visit Now</button></Link>
      </Carousel.Caption>
    </Carousel.Item>
                          
                          )
  
                    }
                      
  
                  </Carousel>
              




             </div>
            
               <div style={{ 

                 backgroundImage:"url(https://i.ibb.co/729xpRQ/tourguru.jpg)",
                  backgroundRepeat:"no-repeat",
                  size:"cover",
                  backgroundPosition:'center center',
                  minHeight:"400px!important"

              
              }} className="col-md-3">
                 
               </div>
               <div className="col-md-9">
               {location.map (pd=><SliderDescription style={{
               display: 'flex',
               flexDirection:'column'


               }} data={pd}></SliderDescription>)}
               </div>
              
               </div>
            
            
            
            
        </div>
    );
};

export default Slider;