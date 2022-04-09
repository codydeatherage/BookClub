import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { Book, Calendar } from 'react-bootstrap-icons'
import './nav/index.css'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from '../assets/cat-lg-crop-right.jpg'
const SocialFeed = () => {

    return (
        <ContentContainer>
            <Upcoming>
                <h1 style={{ color: 'white', width: '100%', whiteSpace: 'nowrap' }}>Next Meeting</h1>
                <div style={{ display: 'flex', paddingLeft: '10%', marginBottom: '5%' }}>
                    <Book style={{}} color="white" size={60} />
                    <div style={{ maxHeight: '85px' }}>
                        <h1 style={{ color: 'white', width: '100%', fontSize: 'larger', marginLeft: '10%', }}>"The Troop" by Nick Cutter</h1>
                        <h1 style={{ color: 'white', width: '100%', fontSize: 'larger', textAlign: 'center' }}>Ch.1 - Ch. 16</h1>
                    </div>
                </div>
                <div style={{ display: 'flex', paddingLeft: '10%', }}>
                    <Calendar color="white" size={60} />
                    <div>
                        <h1 style={{ color: 'white', width: '100%', fontSize: 'larger', marginLeft: '15%' }}>Jan 1st, 1970</h1>
                        <h1 style={{ color: 'white', width: '100%', fontSize: 'larger', marginLeft: '15%', textAlign: 'center' }}>9:00pm</h1>



                    </div>
                </div>
                <Link to="/login">

                    <Button variant="outline-warning" size="lg" style={{ marginTop: '15px', width: '100%' }}>
                        Sign in
                    </Button>
                </Link>
            </Upcoming>



            {/*<Dashboard>
                <Button variant="danger" size="lg" style={{position: 'absolute', left: '22.5%', marginTop: '5%'}}>+ Create Group</Button>
                <GroupContainer>
                    <Group style={{ marginRight: '5%' }}>Group 1</Group>
                    <Group >Group 2</Group>
                    <Group style={{ marginRight: '5%' }}>Group 3</Group>
                    <Group >Group 4</Group>
                </GroupContainer>
            </Dashboard> */}
        </ContentContainer>
    );
}

export default SocialFeed;

const GroupContainer = styled.div`
position: relative;
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
    width: 30%;
    height: 100%;
    max-width: 250px;
    max-height: 150px;
    background-color: rgba(24,24,24, 0);/* 
    justify-content: space-between; */
`

const Issue = styled.div`
    width: 50px;
    background
`

const ContentContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => props.src.main};
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    padding-top: 7%;
    padding-left: 10%;
`

ContentContainer.defaultProps = {
    src: {
        main: `url(${img})`
    }
}