import styled from 'styled-components'
import React, { useState } from 'react'
import api from '../../api'
import owlImage from '../../assets/owl.jpg'
const SignInForm = ({ setCurrUser }) => {
    const [username, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [warning, setWarning] = useState(false);

    const login = async () => {
        const payload = { username, pass };
        await api.login(payload).then((res) => {
            console.log(res);
            setCurrUser(username);
            localStorage.setItem('user', username);
        })
            .catch((e) => {
                console.log('Login Failed');
                setWarning(true);
               /*  console.error(e); */
            })
    }

    return (
        <Container>
            <FormBody>
                <Logo src={owlImage} alt="" />
                {warning &&
                    <Warning >Check that username and password are correct</Warning>
                }
                <InputContainer>
                    <InputLabel htmlFor="inputEmail">Username or Email Address</InputLabel>
                    <Field type="text" id="inputEmail" placeholder="Email Address"
                        onChange={(e) => { setUser(e.target.value) }}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="inputPassword">Password</InputLabel>
                    <Field type="password" id="inputPassword" placeholder="Password" required
                        onChange={(e) => { setPass(e.target.value) }}
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
    background: #F8FFF0;
    border: 1px solid black;
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
margin: 0 auto;
`

const InputLabel = styled.label`
width: 100%;
`

const Field = styled.input.attrs({
    className: 'rounded-pill'
})`
width: 60%;
border: ${props => props.active ? '2px solid #d9534f' : null};
`

const Border = styled.div`
    width: 100%;
    height: 100%;
    border: ${props => props.valid ? '2px solid #5cb85c' : '2px solid #d9534f'}

`
const Warning = styled.h1`
    color: #d9534f;
    font-size: 14px;
`