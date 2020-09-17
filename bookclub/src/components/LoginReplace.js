import { getDefaultNormalizer } from "@testing-library/react";
import React, {Component} from 'react';

import image from './../assets/owl.jpg';

class LoginReplace extends Component{
    render(){
        return(
            <div className="background justify-content-between">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-sm-9 col-md-7 col-lg-5 mx-auto"> */}
                            <div className="container-signin ml-auto">
                                <img className="sign-in-image rounded-circle" src={image} alt=""></img>
                                <h4 className="form-header">Create an account</h4>
                                    <div className="card card-signin my-3 mx-auto"> 
                                        <div className="card-body">
                                            <div className="header">
                                                <form className="form-signin">
                                                    <div className="custom-label-group">
                                                        <label className="font-size" htmlFor="inputEmail">Username or Email Address</label>
                                                        <input type="email" id="inputEmail" className="form-control rounded-pill" placeholder="Email Address" required autofocus></input>
                                                    </div>
                                                    <div className="custom-label-group my-2">
                                                        <label className="font-size" htmlFor="inputPassword">Password</label>
                                                        <input type="password" id="inputPassword" className="form-control rounded-pill" placeholder="Password" required autofocus></input>
                                                    </div>
                                                    <div className="font-size custom-control custom-checkbox mb-3">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                                    </div>
                                                    <button className="btn btn-signup btn-google btn-block font-size rounded-pill" type="submit">Sign Up</button>
                                                    {/* <hr className="my-4"/>
                                                    <button className="btn btn-lg btn-danger btn-google btn-block font-size" type="submit"><i className="fab fa-google mr-2"></i> Sign up with Google</button> */}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginReplace;