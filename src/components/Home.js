import styled from 'styled-components'
import React from 'react'
import discordLogo from './../assets/discord3.png';

const Home = () => {
    let members = [
        'Chris',
        'Ashwin',
        'Shelby',
        'Sam',
        'Andrew',
        'Mel',
        'Cody'
    ];

    let activeMembers = members.length;
    members.sort();
    return (
        <div className="bg-home">
            <div className="container-home">
                <div className="row">
                    <div className="col-members">
                        <div className="card">
                            <div id="members-list">
                                <h1 className="card-title">Members ({activeMembers})</h1>
                                {members.map((name, index) => {
                                    return (<h1 className="members-list" key="index">{name}</h1>)
                                })}
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="discord">
                                <h1 className="discord-label">Discord
                                    <img src={discordLogo} height='60px' />
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content-home">
                            <div className="card card-members">
                                <h1 className="card-title">Currently Reading: The DaVinci Code (Week 1)</h1>
                                <div className="book">
                                    <img className="book-img my-5" src={discordLogo}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <h1 className="card-title">Next Meeting</h1>
                            <h1 className="card-body">10/4</h1>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h1>asdfasdfasdf</h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
    /*  */
}

export default Home;