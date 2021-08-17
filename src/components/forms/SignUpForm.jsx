import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import owlImage from '../../assets/owl.jpg'
import api from '../../api'

const FormBody = styled.div.attrs({
    className: 'form-signin'
})`
    height: 85%;
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
    font-size: 24px;
`

const Button = styled.button`
    width: 50%;
    height: 8%;
    margin-top: 5%;
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

const Field = styled.input`
    width: 60%;
`

const Warning = styled.h1`
    color: #d9534f;
    font-size: 14px;
`

const SignUpForm = () => {
    const [username, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [passCheck, setPassCheck] = useState('')
    const [warning, setWarning] = useState(false)
    const [borderStyle, setBorderStyle] = useState({ user: '', pass: '', passCheck: '' })
    const borderSuccess = '2px solid #5cb85c';
    const borderDanger = '2px solid #d9534f';

    const handleSubmit = async () => {
        if (pass === passCheck) {
            setWarning(false);
            const payload = { username, pass }
            await api.createAccount(payload).then((res) => {
                console.log(res);
            })
        }
        else {
            setBorderStyle({ user: borderStyle.user, pass: borderDanger, passCheck: borderDanger });
            setWarning('pass');
        }
    }

    useEffect(() => {
        //change Field border to green if password matches with verify field
        if (passCheck === pass && passCheck && pass) {
            setBorderStyle({ user: borderStyle.user, pass: borderSuccess, passCheck: borderSuccess });
        }
        //change Field border to nothing if they do not match
        else if (borderStyle.pass || borderStyle.passCheck) {
            setBorderStyle({ user: borderStyle.user, pass: '', passCheck: '' });
        }
    }, [passCheck, pass])

    return (
        <Container>
            <FormBody>
                <Logo src={owlImage} alt="" />
                <Header>Sign Up</Header>
                {warning &&
                    (warning === 'pass' ?
                        <Warning >Passwords must match</Warning>
                        :
                        (warning === 'user' &&
                            <Warning >Email must be valid</Warning>
                        )
                    )
                }
                <InputContainer>
                    <InputLabel htmlFor="inputEmail">Username or Email Address</InputLabel>
                    <Field type="text" id="inputEmail" placeholder="Email Address"
                        onChange={(e) => { setUser(e.target.value) }}
                        style={{ border: `${borderStyle.user}` }}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="inputPassword">Password</InputLabel>
                    <Field type="password" id="inputPassword" placeholder="Password" required autoFocus
                        onChange={(e) => { setPass(e.target.value) }}
                        style={{ border: `${borderStyle.pass}` }}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="verifyPassword"> Verify Password</InputLabel>
                    <Field type="password" id="verifyPassword" placeholder="Password" required autoFocus
                        onChange={(e) => { setPassCheck(e.target.value) }}
                        style={{ border: `${borderStyle.passCheck}` }}
                    />
                </InputContainer>
                <Button onClick={handleSubmit}>Sign Up</Button>
            </FormBody>
        </Container>
    )
}

export default SignUpForm