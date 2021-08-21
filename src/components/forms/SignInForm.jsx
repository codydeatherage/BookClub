import styled from 'styled-components'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'
import owlImage from '../../assets/owl.jpg'
import { CSSTransition } from 'react-transition-group';

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

const SignInForm = ({ changeUser, changePass}) => {
    const [username, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [warning, setWarning] = useState(false)

    const login = async () => {
        const payload = {username, pass};
        await api.login(payload).then((res)=>{
            console.log(res);
        })
    }
    const [userActive, setUserActive] = useState(false);
    const [passActive, setPassActive] = useState(false);
    const [borderStyle, setBorderStyle] = useState({user: '', pass:''});
    const borderSuccess = '2px solid #5cb85c';
    const borderDanger = '2px solid #d9534f';

    const handleSelect = (el) => {
        if (el === 'user') {
            if (userActive === false) {
                setUserActive('valid');
                setBorderStyle({user: borderSuccess, pass: borderStyle.pass});
            }
            setPassActive(false)
        }
        if (el === 'pass') {
            if (passActive === false) {
                setPassActive('valid');
                setBorderStyle({user: '', pass: borderSuccess});
            }
            setUserActive(false);
        }
    }



    return (
        <Container>
            <FormBody>
                <Logo src={owlImage} alt="" />
                {/* <Header>Sign In</Header> */}

                <InputContainer>
                    <InputLabel htmlFor="inputEmail">Username or Email Address</InputLabel>
                    <Field type="text" id="inputEmail" placeholder="Email Address"
                        onChange={(e) => { setUser(e.target.value) }}
                        onClick={() => handleSelect('user')}
                        style={{border: `${borderStyle.user}`}}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="inputPassword">Password</InputLabel>
                    <Field type="password" id="inputPassword" placeholder="Password" required
                        onChange={(e) => { setPass(e.target.value) }}
                        onClick={() => handleSelect('pass')}
                        style={{border: `${borderStyle.pass}`}}
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