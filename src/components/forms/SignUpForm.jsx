import styled from 'styled-components'
import React, { useState, useEffect} from 'react'
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
    const [visible, setVisible] = useState(true)
    const handleSubmit = async () => {
        const payload = { username, pass }
        await api.createAccount(payload).then((res) => {
            console.log(res);
        })
    }

    useEffect(() =>{



    },[])

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
                    <InputLabel htmlFor="verifyPassword"> Verify Password</InputLabel>
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