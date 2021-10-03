import React from 'react'
import styled from 'styled-components'

const Profile = () => {


    return (
        <>
        <Banner></Banner>
        <ProfileCircle/>
        <Container>
            
        </Container>
        </>
    )
}

export default Profile

const Banner = styled.div`
width: 100%;
height: 300px;
background-color: green;
`

const ProfileCircle = styled.div`
width: 100px;
height: 100px;
margin-top: -50px;
border-radius: 50%;
border: 2px solid blue;

`

const Container = styled.div`
width: 100%;
height: calc(100vh - 400px);
border: 2px solid red;

`