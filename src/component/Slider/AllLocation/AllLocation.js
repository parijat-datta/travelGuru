import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../../fakeData';


const allLocation = () => {
    return (
        <div className="container">
        <div className="row" style={{marginTop:"30px"}}>
           
            {
             fakeData.map(lc=><div style={{marginTop:"20px",padding:"20px"}} class="card w-100">
             <div class="card-body">
            <h5 class="card-title">{lc.location}</h5>
               <p class="card-text">{lc.description}</p>
               <img className="img-responsive w-100" src={lc.picture} alt=""></img><br></br>
               <Link to={`/locationdetail/${lc.id}`}>

                   <button style={{
                       backgroundImage:"linear-gradient(30deg,red,purple)", marginTop:"20px",width:"30%",padding:"7px",color:"white",fontWeight:"700",fontSize:"16px",border:"none",borderRadius:"5px"
                   }}>Visit Now</button>
               </Link>
             </div>
           </div>)




            }



        </div>
        
    </div>
    );
};

export default allLocation;



