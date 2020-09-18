import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle,faFastForward} from '@fortawesome/free-solid-svg-icons'


const BookingForm = (props) => {
   const newId=(props.locationId);
    const [details,setDetails]=useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);

    useEffect(()=>{
     
      fetch('https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91')

       .then (response =>response.json())
       .then (data =>setDetails(data))

    },[])
    const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  
 

  return (
   <div>    <form onSubmit={handleSubmit(onSubmit)}>
     <label htmlFor="from">Your Place</label>
      <input className="form-control" name="from" ref={register({ required: true })} defaultValue={details.city} ref={register} />
<br></br>
      <label htmlFor="to">Destination City</label>
      <input className="form-control" name="to" ref={register({ required: true })} defaultValue={props.locationName} ref={register} />
      
     
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <br></br>
      {(!selectedDate || !selectedDate2 ) ? <p className="text-danger text-left"><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon> Select Your Travel Date</p>:<p className="text-success text-left"><FontAwesomeIcon icon={faFastForward}></FontAwesomeIcon> Start Travelling</p>}
      <label htmlFor="fromDate">From:</label>
      <br></br>
   <DatePicker name="fromDate" style={{display: 'inline'}}
   selected={selectedDate}
    onChange={date=>setSelectedDate(date)}
    dateFormat='dd/MM/yyyy'
    placeholder="dddd/MM/yy"
    minDate={new Date()}
    isClearable
     />
    <br></br>
<label htmlFor="toDate">To:</label><br></br>
<DatePicker 
name="toDate"
   selected={selectedDate2}
    onChange={date=>setSelectedDate2(date)}
    dateFormat='dd/MM/yyyy'
    minDate={new Date()}
    isClearable
     />
     
    </form>
    <br></br>
    <Link to={ `/bookRoom/${newId}`}>
  {selectedDate && selectedDate2 &&  <button className='btn btn-success'>Book Your Room</button> }</Link>
    </div>
    
    );
};

export default BookingForm;