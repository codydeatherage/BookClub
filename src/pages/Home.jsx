import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: antiquewhite;
`

const SocialFeed = styled.div`
    width: 60%;
    height: 100%;
    border: 2px solid red;
    background-color: antiquewhite;
    margin: auto auto;

`
const Home = () =>{
    return(
        <Container>
            <SocialFeed/>
        </Container>
    )
}

export default Home;