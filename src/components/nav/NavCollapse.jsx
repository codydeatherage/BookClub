import React from 'react'
import {Link} from 'react-router-dom'
import NavItem from './NavItem'
import styled from 'styled-components'
import '../../App.css'

const NavCollapse = ({ toggler, logout, outer }) => {
    if (outer) {
        return (
            <>
                <Button
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                </Button>
                <DropDownMenu aria-labelledby="dropdownMenuButton">
                    <Link to="/profile" className="dropdown-item">My Profile</Link>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a onClick={logout} class="dropdown-item" href="#">Log out</a>
                </DropDownMenu>
            </>
        )
    }
    else {
        return (
            <div className="collapse navbar-collapse pr-4" id={toggler}>
                <ul className="navbar-nav ml-auto">
                    <NavItem path="/" label="Home" />
                    <NavItem path="/groups" label="My Groups" />
                </ul>
            </div>
        )
    }
}

export default NavCollapse

const Button = styled.button.attrs({
    className: "btn border bi bi-person-circle dropdown-toggle"
})`
    margin-left: auto;
    color: black;
    text-align: center;
`
const DropDownMenu = styled.div.attrs({
    className: "dropdown-menu"
})`
    position: absolute;
    margin-left: 83vw;
    border: 2px solid green;
    height: 10vh;
    width: 5vw;
    background-color:
`