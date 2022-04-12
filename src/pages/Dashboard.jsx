import React from 'react'
import styled from 'styled-components';
import img from './../assets/gradient2.jpg';

const Dashboard = () => {


    return (
        <div style={{ height: '100vh', width: '60vw', marginLeft: '20vw', marginRight: '20vw', border: '1px solid red' }}>
            <h1>Upcoming</h1>
            <div style={{ height: '20%', width: '100%', display: 'flex', border: '1px solid black' }}>
                <div style={{ backgroundColor: 'black', width: '80%', height: '', display: 'flex', color: 'white' }}>
                    !!Upcoming Events Go Here!!

                </div>
                <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', height: '100%' }}>
                    <h4 style={{ color: 'black' }}> View Full Schedule</h4>

                </div>
            </div>

            <div style={{ marginTop: '5%' }}>
                <div style={{ height: '100%', width: '90%', margin: 'auto auto', border: '1px solid black' }}>
                    <h1>My Groups</h1>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 45%)',gridRowGap:'20px',gridColumnGap:'20px', justifyContent:'center' , border: '3px solid green',/* paddingTop:'5%', */ padding:'5% 0'}} >



                        <div style={{ width: '100%', height: '100%', border: '1px solid blue' }}>
                            <h2 style={{ height: '10%' }}>Group 1</h2>
                            <div style={{ width: '100%', height: '100%', }}>
                                <div style={{ height: '100px', width: '100px', borderRadius: '120px', border: '1px solid red', margin: 'auto auto' }}></div>
                            </div>

                        </div>
                        <div style={{ width: '100%', height: '100%', border: '1px solid blue' }}>
                            <h2>Group 2</h2>
                            <div style={{ width: '100%', height: '90%', }}>
                                <div style={{ height: '100px', width: '100px', borderRadius: '120px', border: '1px solid red', margin: 'auto auto' }}></div>

                            </div>

                        </div>
                        <div style={{ width: '100%', height: '100%', border: '1px solid blue' }}>
                            <h2>Group 3</h2>
                            <div style={{ width: '100%', height: '90%', }}>
                                <div style={{ height: '100px', width: '100px', borderRadius: '120px', border: '1px solid red', margin: 'auto auto' }}></div>
                            </div>

                        </div>
                        <div style={{ width: '100%', height: '100%', border: '1px solid blue' }}>
                            <h2>Group 4</h2>
                            <div style={{ width: '100%', height: '90%', }}>
                                <div style={{ height: '100px', width: '100px', borderRadius: '120px', border: '1px solid red', margin: 'auto auto' }}></div>
                            </div>

                        </div>
                    </div>





                </div>



            </div>
        </div >
    )



}


export default Dashboard;

const Upcoming = styled.div`
    width: 100%;



`