import styled from 'styled-components'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import owlImage from '../../assets/owl.jpg'
import Input from '../Input'
import api from '../../api'

const FormBody = styled.div.attrs({
    className: 'form-signin'
})`
    height: 100%;
    width: 100%;
    text-align: center;
`

const Container = styled.div`
    height: 100%;
    width: 100%;
    min-width: 300px;
    border-radius: 10%;
    font-family: 'Gowun Batang', serif;
    background: linear-gradient(to right bottom, #bdc3c7, #000000);
`

const Logo = styled.img`
    height: 80px;
    border-radius: 50%;
    margin-top: 20%;
`

const Header = styled.h1`
    font-family: 'Gowun Batang', serif;
    color: rgb(190, 199, 171);
`

const Button = styled.button`
    width: 50%;
    height: 8%;
    border-radius: 20px;
    background-color: white;
`

const InputContainer = styled.div`
width: 100%;
color: rgb(190, 199, 171);
/* text-align: left; */
margin: 0 auto;
`

const InputLabel = styled.label`
width: 100%;
`

const Field = styled.input`
width: 60%;
`

const SignInForm = ({changeUser, changePass, login}) => {
    return (
        <Container>
            <FormBody>
                {/* <FormSelect/> */}
                <Logo src={owlImage} alt="" />
                <Header>Sign In</Header>
                <InputContainer>
                    <InputLabel htmlFor="inputEmail">Username or Email Address</InputLabel>
                    <Field type="text" id="inputEmail" placeholder="Email Address"
                        onChange={(e) => { changeUser(e.target.value) }}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="inputPassword">Password</InputLabel>
                    <Field type="password" id="inputPassword" placeholder="Password" required autoFocus
                        onChange={(e) => { changePass(e.target.value) }}
                    />
                </InputContainer>
                <InputContainer style={{ textAlign: 'center' }} >
                    <Field style={{ width: '5%' }} type="checkbox" id="rememberCheck" />
                    <label htmlFor="rememberCheck">Remember Me</label>
                </InputContainer>
                <Button onClick={login}>Sign In</Button>
            </FormBody>
        </Container>
    )
}

export default SignInForm