import React from "react";

function Reg() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="header">
                    <label className="name">PhotoBook</label>
                    <button className="btn btn-outline-primary sign-up">Sign In</button>
                </div>
            </nav>
            <form id="form">
                <p className="display-4">Create your account</p>
                <div className="container p-4 my-3 border">
                    <div className="form-group">
                        <label htmlFor="inputUsername">Username</label>
                        <input initialValue="" type="name" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail" or="inputEmail">Email address</label>
                        <input initialValue="" type="email" className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input initialValue="" type="password" className="form-control" id = "passw" placeholder="Enter password"/>
                    </div>
                    <div className="form-group">
                        <div className="button-box">
                            <button type="button" className="btn btn-outline-primary sign-in">Sign Up</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Reg;