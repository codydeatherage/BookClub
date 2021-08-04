import React, { Component } from 'react'
import styled from 'styled-components'

import bgImage from './../assets/janko.jpg'
import SignInForm from './SignInForm'

const LoginReplace = () => {

    return (
        <div className="background justify-content-between">
            <SignInForm></SignInForm>
                    {/* <div className="col-sm-9 col-md-7 col-lg-5 mx-auto"> */}
                    {/*  */}
                    {/* </div> */}
           
            
        </div>
    )

}

export default LoginReplace;