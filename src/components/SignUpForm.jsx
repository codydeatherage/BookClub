import styled from 'styled-components'
import React, { useState } from 'react'
import owlImage from './../assets/owl.jpg'
import api from '../api'

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

const Header = styled.h1`
    font-family: 'Gowun Batang', serif;
    color: rgb(190, 199, 171);
`

const Button = styled.button`
    width: 50%;
    height: 10%;
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

const SignUpForm = () => {
    const [username, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async () => {
        const payload = { username, pass }
        await api.createAccount(payload).then((res) => {
            console.log(res);
        })
    }

    return (
        <Container>
            <FormBody>
                <Logo src={owlImage} alt="" />
                <Header>Sign Up</Header>
                <InputContainer>
                    <InputLabel htmlFor="inputEmail">Username or Email Address</InputLabel>
                    <Field type="text" id="inputEmail" placeholder="Email Address"
                        onChange={(e) => { setUser(e.target.value) }}
                        value={username}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="inputPassword">Password</InputLabel>
                    <Field type="password" id="inputPassword" placeholder="Password" required autoFocus
                        onChange={(e) => { setPass(e.target.value) }}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="verifyPassword">Password</InputLabel>
                    <Field type="password" id="verifyPassword" placeholder="Password" required autoFocus
                        onChange={(e) => { setPass(e.target.value) }}
                    />
                </InputContainer>
                <Button onClick={handleSubmit}>Sign Up</Button>
            </FormBody>
        </Container>
    )
}

export default SignUpForm