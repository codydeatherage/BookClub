import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ path, label }) => {
    return (
        <li className="nav-item my-auto">
            <Link style={{ color: 'white' }} className="nav-link" to={path}>{label}</Link>
        </li>
    )
}

export default NavItem
