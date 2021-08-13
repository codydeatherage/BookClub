import React from 'react'
import styled from 'styled-components'

const CtrlContainer = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 15%;
    z-index: 99;
    border-radius: 25% 25% 0 0;
    margin-bottom: 10vh;
`

const Frame = styled.div`
    z-index: 99;
    position: absolute;
    margin-top: 10vh;
    left: calc(50% - 10vw);
    height: 50vh;
    width: 20vw;
    min-width: 300px;
    min-height: 450px;
    border-radius: 10%;
    overflow: hidden;
    background: linear-gradient(to right bottom, #bdc3c7, #000000);
`

const Button = styled.div`
    width: 50%;
    height: 70%;
    z-index: 99;
    text-align: center;
    padding: 3%;
`
const ModalFormFrame = ({ children, signin, signup}) => {
    return (
        <Frame>
            <CtrlContainer>
                <Button onClick={signin}style={{ borderBottom: '2px solid black', borderRight: '1px solid black' }} >Sign In</Button>
                <Button onClick={signup} style={{ borderBottom: '2px solid black', borderLeft: 'px solid black' }} >Sign Up</Button>
            </CtrlContainer>
            {children}
        </Frame>
    )
}

export default ModalFormFrame