import Navbar from '../../layouts/navbar/Navbar';
import React from 'react';

function PrivateChatPage () {
    return (
        <>
            <Navbar/>
            <div className="container-fluid privatechat">
                <div className="container-fluid headerchat fixed">
                    <div className="row">
                            <img alt="" className="col-xs-2 col-md-3 avatarprivate" src="https://i.pinimg.com/originals/9e/21/86/9e2186e732c8c717a0d3c74a22a4d8ff.jpg" />
                            <div className="col-md-4 animaltitle"> Jason Momoa</div>
                    </div>
                </div>
                <div className="container-fluid mesagebox fixed-bottom">
                    <div className="row chatboxmesage">
                        <input className="form-control" type="text" placeholder="type your mesage" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrivateChatPage;