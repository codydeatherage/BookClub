import React, { Component } from 'react'
import styled from 'styled-components'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

const Login = ({changeUser, changePass, login}) => {
    return (
        <div className="container">
            <SignInForm changeUser={changeUser} changePass={changePass} login={login}></SignInForm>
        </div>
    )
}

export default Login;