import React, {useState} from 'react'
import NavItem from './NavItem'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import '../../App.css'

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
margin-right: 0;
margin-left: 84vw;
border: 2px solid green;
height: 10vh;
width: 5vw;
`


const NavCollapse = ({ toggler, logout, outer }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    if (outer) {
        return (
            <>

                <Button
                   /*  id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false" */
                    onClick={() => setMenuVisible(!menuVisible)}

                >
                </Button>
                <CSSTransition
                    in={menuVisible}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit/* 
                    onEnter={() => setMenuVisible(true)}
                    onExited={() => setMenuVisible(false)} */
                >
                    <DropDownMenu /* aria-labelledby="dropdownMenuButton" */>
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </DropDownMenu>
                </CSSTransition>


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