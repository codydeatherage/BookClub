import React from 'react'
import NavItem from './NavItem'
import styled from 'styled-components'

const Button = styled.button.attrs({
    className: "btn border rounded-pill"
})`
    color: black;
    background-color: beige;
`

const NavCollapse = ({ toggler, logout }) => {
    return (
        <div className="collapse navbar-collapse pr-4" id={toggler}>
            <ul className="navbar-nav ml-auto">
                <NavItem path="/" label="Home" />
                <NavItem path="/groups" label="My Groups" />
                <Button onClick={logout}>Log Out</Button>
                {/* <button className="btn border border-secondary my-2 my-sm-0 rounded-pill" onClick={logout}>Log Out</button> */}
            </ul>
        </div>
    )
}

export default NavCollapse