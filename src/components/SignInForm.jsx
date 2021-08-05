import styled from 'styled-components'
import React from 'react'
import owlImage from './../assets/owl.jpg'
import Input from './Input'

const FormBody = styled.div.attrs({
    className: 'form-signin'
})`
    height: 100%;
    width: 100%;
    text-align: center;
`

const Container = styled.div`
    margin-top: 10vh;
    height: 50vh;
    width: 25vw;
    min-width: 300px;
    border-radius: 10%;
    font-family: 'Gowun Batang', serif;
    border: 2px solid green;
    background: rgb(65,51,51);
    background: linear-gradient(171deg, rgba(65,51,51,1) 0%, rgba(207,188,172,1) 0%, rgba(135,126,117,1) 17%, rgba(101,100,99,1) 28%, rgba(64,63,60,1) 44%, rgba(25,23,23,1) 75%, rgba(0,0,0,1) 95%);
`

const Logo = styled.img`
    height: 20%;
    border-radius: 50%;
    border: 1px solid red;
    margin-top: 10%;
`

// const InputContainer = styled.div`
// width: 100%;
// color: rgb(190, 199, 171);
// /* text-align: left; */
// margin: 0 auto;
// `

// const InputLabel = styled.label`
// width: 100%;
// `

// const Input = styled.input`
// width: 60%;
// `
const Header = styled.h1`
    font-family: 'Gowun Batang', serif;
    color: rgb(190, 199, 171);

`
const SignInForm = () => {
    return (
        <Container>
            <FormBody>
                <Logo src={owlImage} alt="" />
                <Header>Sign In</Header>
                <Input type="email" id="inputEmail" placeholder="Email Address" text="Username" />
                <Input type="password" id="inputPassword" placeholder="Password" text="Password" />
                <Input type="checkbox" id="rememberCheck" text="Remember Me" />
            {/*     <InputContainer>
                    <InputLabel htmlFor="inputEmail">Username</InputLabel>
                    <Input type="email" id="inputEmail" placeholder="Email Address" required autofocus />
                </InputContainer> */}
             {/*    <InputContainer>
                    <InputLabel htmlFor="inputPassword">Password</InputLabel>
                    <Input  required autofocus />
                </InputContainer>
                */}
            </FormBody>
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
                                                    <label className="custom-control-label" >Remember password</label>
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