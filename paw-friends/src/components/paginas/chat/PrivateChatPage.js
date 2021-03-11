import Navbar from '../../layouts/navbar/Navbar';
import React from 'react';

function PrivateChatPage () {
    return (
        <>
            <Navbar/>
            <div className="container-fluid">
                <div className="card card-chat" >
                    <div className="row">
                        <div className="col-6 col-sm-6">
                            <img className="card-img-chatpicperson" src="https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg" alt="Cardcap"/>
                            <img className="card-img-chatpicanimal" src="https://shortyawards.imgix.net/entries/12th/2c77445c-4920-447a-8c8f-6f4a2d89ed3e.jpeg?auto=format&fit=crop&h=400&q=65&w=400&s=85162f99d736e3eb6e30a6aca8af8bee" alt=""/>
                        </div>
                    
                        <div className="col-6 col-sm-6">
                            <div className="card-body">
                                <h5 className="card-title">Jason Murry</h5>
                                <h6 className="card-title">Sr.Bigodes</h6>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </>
    );
}

export default PrivateChatPage;