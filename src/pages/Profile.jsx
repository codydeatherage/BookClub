import React from 'react'
import styled from 'styled-components'
import img from '../assets/doggy.PNG'
const Profile = () => {


    return (
        <>
            <Banner>Upload a Banner Image
            </Banner>
            <ProfileCircle>
                <img style={{ width: '100%', height: '100%' }} src={img} alt=""></img>

            </ProfileCircle>
            <h1 style={{position:'absolute', left: '250px' , top:'400px'}}>User Name</h1>
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
text-align: center;
line-height: 300px;
`

const ProfileCircle = styled.div`
width:200px;
height: 200px;
margin-top: -50px;
border-radius: 50%;
border: 2px solid blue;
overflow:hidden;

`

const Container = styled.div`
width: 100%;
height: calc(100vh - 400px);
border: 2px solid red;

`