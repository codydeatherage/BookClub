import React from 'react'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

const Form = ({ type, changeUser }) => {

    switch (type) {
        case 'signin': return <SignInForm setCurrUser={changeUser} />
        case 'signup': return (<SignUpForm />)
        default: return <span>{`No form of type ${type}`}</span>
    }
}

export default Form