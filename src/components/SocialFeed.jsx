import React from 'react'
import styled from 'styled-components'

const SocialFeed = () => {

    return (
        <ContentContainer>
            <Upcoming>
                <h1 style={{ color: 'white', width: '100%' }}>Upcoming Meetings</h1>
                <Meeting></Meeting>
            </Upcoming>
            <Dashboard>
                <GroupContainer>
                    <Group style={{ marginRight: '5%' }}>Group 1</Group>
                    <Group >Group 2</Group>
                    <Group style={{ marginRight: '5%' }}>Group 3</Group>
                    <Group >Group 4</Group>
                </GroupContainer>
            </Dashboard>
        </ContentContainer>
    );
}

export default SocialFeed;

const GroupContainer = styled.div`
margin: 0 5%;
    height: 80%;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 10%;
    padding-left: 10%;
    border: 1px solid green;
`
const Group = styled.div`
    height: 40%;
    width: 40%;
    background-color: red;

`
const Dashboard = styled.div`
    height: 84vh;
    margin-top: 1vh;
    border: 2px solid blue;
    width: 100%;
    border-radius: 25px;
    background-color: gray;
`
const Upcoming = styled.div`
    display: flex;
    flex-wrap: wrap;    
    padding-left: 20px;
    width: 100%;
    height: 15vh;
    max-height: 150px;
    border: 2px solid red;
    background-color: rgb(24,24,24);
    border-radius: 25px;
    justify-content: space-between;
`

const Meeting = styled.div`
    width: 120px;
    min-width: 50px;
    height: 80px;
    background-color: orange;
    border: 2px solid yellow;
`

const Issue = styled.div`
    width: 50px;
    background
`

const ContentContainer = styled.div`
    width: 80%;
    height: 100vh;
    margin-left: 10%;
    margin-right: 10%;
    border: 2px solid green;
    background-color: white;
`