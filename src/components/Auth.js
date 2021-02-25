import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import './Auth.css'
function Auth() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div  className="header">
                    <label class = "name">PhotoBook</label>
                    <button className="btn btn-outline-primary sign-up">Sign Up</button>
                </div>
            </nav>
            <form id="form">
                <p className="display-4">Sign in to Photobook</p>
                <div className="container p-4 my-3 border">
                    <div className="form-group">
                        <label htmlFor="inputUsername">Username</label>
                        <input initialValue="" type="name" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input initialValue="" type="password" className="form-control" id = "passw" placeholder="Enter password"/>
                    </div>
                    <div className="form-group">
                        <div className="button-box">
                            <button type="button" className="btn btn-primary sign-in">Sign In</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Auth;