import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../../fakeData';


const BookRoom = () => {
    let {newId}=useParams();
   
    console.log(newId);
    const newData=(fakeData.filter(pd=>pd.id==newId))
    const hotels=newData[0].hotel;

    console.log(hotels.map(pd=>pd.hotelFirstName));
    
  
    return (
        <div className="container ">
            <div className="row" style={{marginTop:'80px'}}>

        <div className="col-md-8"
        style={{display:'flex',margin:'auto', flexDirection:'row', justifyContent:'center'}}
        
        >
            {hotels.map(pd=> <Card style={{ width: '18rem',marginTop:'3px' }}>
  <Card.Img variant="top" src={pd.hotelFirstPic} />
  <Card.Body>
    <Card.Title style={{fontSize:"18px",fontWeight:"800",color:"red"}}>{pd.hotelFirstName}</Card.Title>
    <Card.Text>
      
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{pd.hotelFirstFacilities}</ListGroupItem>
    <ListGroupItem>{pd.hotelFirstDesc}</ListGroupItem>
    <ListGroupItem>{pd.hotelFirstCancel}</ListGroupItem>
    <ListGroupItem>{pd.hotelFirstReview}</ListGroupItem>
    <ListGroupItem style={{fontSize:"18px",fontWeight:"800",color:"green"}}> {pd.hotelPrice}</ListGroupItem>
  </ListGroup>
  
  
</Card>)}
       
 
        </div>
             
        <div style={{display:'flex',margin:'auto',marginTop:'0',verticalAlign:'top'}} className="col-md-4">
      {(newId!==1  && newId==2 || newId==3) ?

         <iframe src={newData[0].map} width="600" height="450"></iframe> : 
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59424.789829688685!2d91.9707879!3d21.4273046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1600350433624!5m2!1sen!2sbd" width="600" height="450"></iframe>

} 


    
</div>


            </div>



        </div>
    );
};

export default BookRoom;