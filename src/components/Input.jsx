import React from 'react'
import styled from 'styled-components'

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

const Input = ({ id, type, placeholder, text }) => {
    if (type === "checkbox") {
        return (
            <InputContainer style={{ textAlign: 'center' }} >
                <Field style={{ width: '5%' }} type={type} id={id} />
                <label htmlFor={id}>{text}</label>
            </InputContainer>
        )
    }
    else {
        return (
            <InputContainer>
                <InputLabel htmlFor={id}>{text}</InputLabel>
                <Field type={type} id={id} placeholder={placeholder} required autoFocus />
            </InputContainer>
        )
    }
}

export default Input;