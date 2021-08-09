import React, { Component } from 'react'
import styled from 'styled-components'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import Particles from 'react-particles-js'

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(24,24,24);
    background: linear-gradient(171deg, rgba(65,51,51,1) 0%, rgba(207,188,172,1) 0%, rgba(135,126,117,1) 17%, rgba(101,100,99,1) 28%, rgba(64,63,60,1) 44%, rgba(25,23,23,1) 75%, rgba(0,0,0,1) 95%);


`
const Login = ({ changeUser, changePass, login }) => {
    return (
        <Background>

            <SignInForm changeUser={changeUser} changePass={changePass} login={login}></SignInForm>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 120,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: "polygon",
                            stroke: {
                                width: 0,
                                color: "#2a34d7"
                            },
                            polygon: {
                                nb_sides: 9
                            }
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 0,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1, sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 192.40944730386272,
                            color: "#cfbcac",
                            opacity: 0.1683582663908799,
                            width: 2.5654592973848365
                        },
                        move: {
                            enable: true,
                            speed: 1.603412060865523,
                            direction: "top-right",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: true,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 80,
                                duration: 0.2
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: true
                }}
            >

            </Particles>

        </Background>
    )
}

export default Login;