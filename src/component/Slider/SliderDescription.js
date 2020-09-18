import React from 'react';
import { Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


const SliderDescription = (props) => {
    const {location,shortTitle,id}=props.data;
   
    
    return (
        <Card style={{ 
             backgroundImage:"linear-gradient(30deg, green,blue)",
             color:"white",
             fontWeight:"bold",
             border:"1px solid #D0A9F5",
             padding:'10px',
             marginTop:"10px",
             boxShadow:'1px 1px 3px black'


        }}
        
        
        
        className="text-center ">
        
        <Card.Body>
          <Card.Title>{location}</Card.Title>
          <Card.Text>
           {shortTitle}
          </Card.Text>
       
        </Card.Body>
        <Card.Footer className="text-muted">
           <Link to={`/locationdetail/${id}`}> <button style={{backgroundImage:"linear-gradient(60deg,black,purple)",fontWeight:"bold"}} className="btn btn-danger">Visit Now</button></Link>
        </Card.Footer>
      </Card>
    );
};

export default SliderDescription;