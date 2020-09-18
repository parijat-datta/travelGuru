import React from 'react';

const Error = () => {
    return (
        <div className=" container d-flex flex-row "> 
            <img style={{
               display: 'inline-block',
               margin: '0',
               justifyContent:'center'

            }} className="text-center img-responsive" src="https://static.dribbble.com/users/180906/screenshots/2104519/screen_shot_2015-06-12_at_1.40.50_pm.png" alt=""></img>
            <h1 style={{marginTop:"100px"}} className="d-flex flex justify-content-center text-danger mt-100">404 URL NOT FOUND</h1>
        </div>
    );
};

export default Error;