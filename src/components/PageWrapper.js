import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from './../assets/owl.jpg'
import NavCollapse from './nav/NavCollapse'
const Nav = styled.div.attrs({
    className: "navbar navbar-expand-lg navbar-dark bg-dark"
})`
    justify-content: between;

`


const PageWrapper = ({ children, logout }) => {

    return (
        <>
            <Nav>
                <Link to="/">
                    <img className="img-size rounded-circle" src={image} alt=""></img>
                    <label style={{ color: 'white'}} className="navbar-padding">Huddle</label>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavCollapse toggler="navbarResponsive" logout={logout}></NavCollapse>
            </Nav>
            {children}
        </>
    );

}

export default PageWrapper;