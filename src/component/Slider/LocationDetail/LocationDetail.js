import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../../fakeData';
import BookingForm from '../Booking/BookingForm';

const LocationDetail = () => {
   
    const {locationID}=useParams();
    const newData=fakeData.filter(pd=>pd.id==locationID);
    const newId=(newData[0].id)
    const {location,description,picture}=newData[0];
   
    
    
   
  
    
    // const selectedLocation=location.find(location.id===id);
    return (
        
    <div className="container">
<div className="row" style={{marginTop:'30px'}}>



    <div className="col-md-9">

    <div>
           
            <img className="img-responsive" style={{width:'100%'}} src={picture} alt=""></img>
            <h1 style={{

fontSize:'3vh',
textTransform:"capitalize",
marginTop:"20px",
marginBottom:"20px"


 }}>{location}</h1><hr></hr>
    <h4 style={{

fontSize:'1.5vh',
lineHeight:"1.8",
textAlign:'left',
textTransform:"capitalize",
marginTop:"20px",
marginBottom:"20px"


 }}>{description}</h4>
        
        

           
        </div>
    </div>

    <div className="col-md-3">
        <BookingForm locationId={newId} locationName={location}></BookingForm>
    </div>
</div>



    </div>
    );
};

export default LocationDetail;