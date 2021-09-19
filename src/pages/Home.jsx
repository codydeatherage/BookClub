import React from 'react'
import styled from 'styled-components'
import SocialFeed from '../components/SocialFeed'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: antiquewhite;
`

const Home = () =>{
    return(
        <Container>
            <SocialFeed/>
        </Container>
    )
}

export default Home;