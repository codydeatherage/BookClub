import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from './../assets/owl.jpg'
import NavCollapse from './nav/NavCollapse'

const Nav = styled.div.attrs({
    className: "navbar navbar-expand-lg navbar-dark bg-dark"
})`
    justify-content: between;

`
//getWindowDimeneions and userWindowDimensions from https://stackoverflow.com/a/36862446
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

const PageWrapper = ({ children, logout }) => {

    const { height, width } = useWindowDimensions();
    return (
        <>
            <Nav>
                <Link to="/">
                    <img className="img-size rounded-circle" src={image} alt=""></img>
                    <label style={{ color: 'white' }} className="navbar-padding">Huddle</label>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="bi bi-person-circle"></span>
                </button>
                {width <= 998 ?
                    <NavCollapse toggler="navbarResponsive" logout={logout} ></NavCollapse>
                    :
                    <NavCollapse toggler="navbarResponsive" outer logout={logout}></NavCollapse>
                }
            </Nav>
            {children}
        </>
    );
}

export default PageWrapper;