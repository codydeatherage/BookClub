import styled from 'styled-components'
import React from 'react'
import owlImage from './../assets/owl.jpg'
const FormBody = styled.div.attrs({
    className: 'form-signin'
})`
    height: 100%;
    width: 100%;
`

const Container = styled.div`
    height: 70vh;
    width: 35vw;background: rgb(65,51,51);
    background: rgb(65,51,51);
    background: linear-gradient(171deg, rgba(65,51,51,1) 0%, rgba(207,188,172,1) 0%, rgba(135,126,117,1) 17%, rgba(101,100,99,1) 28%, rgba(64,63,60,1) 44%, rgba(25,23,23,1) 75%, rgba(0,0,0,1) 95%);
`

const Logo = styled.img`

`
const SignInForm = () => {
    return (
        <Container>
            <FormBody></FormBody>
        </Container>

        /*         <div className="container-signin ml-auto">
                                <img className="sign-in-image rounded-circle" src={owlImage} alt=""></img>
                                <h4 className="form-header">Create an account</h4>
                                <div className="card card-signin my-3 mx-auto">
                                    <div className="card-body">
                                        <div className="header">
                                            {<form className="form-signin">
                                                <div className="custom-label-group">
                                                    <label className="font-size" htmlFor="inputEmail">Username or Email Address</label>
                                                    <input type="email" id="inputEmail" className="form-control rounded-pill" placeholder="Email Address" required autofocus></input>
                                                </div>
                                                <div className="custom-label-group my-2">
                                                    <label className="font-size" htmlFor="inputPassword">Password</label>
                                                    <input type="password" id="inputPassword" className="form-control rounded-pill" placeholder="Password" required autofocus></input>
                                                </div>
                                                <div className="font-size custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                                </div>
                                                <button className="btn btn-signup btn-google btn-block font-size rounded-pill" type="submit">Sign Up</button>
                                            </form>} }
                                        </div>
                                    </div>
                                </div>
                            </div> */
    )
}

export default SignInForm