import React from 'react'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

const Form = ({ type, changeUser, changePass, login }) => {
    switch (type) {
        case 'signin': return <SignInForm changeUser={changeUser} changePass={changePass}  />;
        case 'signup': return <SignUpForm />;
        default: return <span>{`No form of type ${type}`}</span>
    }
}

export default Form