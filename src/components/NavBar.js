import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'gray',
    textDecorations: 'none',
    color: 'blue'
}

const NavBar = () => {
    return (
        <div className = 'navbar'>
            <NavLink
                to = '/'
                exact
                style = {link}
                activeStyle = {{
                    background: 'pink'
                }}
            >Home</NavLink>

            <NavLink
                to = '/destinations'
                exact
                style = {link}
                activeStyle = {{
                    background: 'pink'
                }}
            >All Destinations</NavLink>

            <NavLink
                to = '/north_america'
                exact
                style = {link}
                activeStyle = {{
                    background: 'pink'
                }}
            >North America</NavLink>

            <NavLink
                to = '/south_america'
                exact
                style = {link}
                activeStyle = {{
                    background: 'pink'
                }}
            >South America</NavLink>

            <NavLink
                to = '/europe'
                exact
                style = {link}
                activeStyle = {{
                    background: 'pink'
                }}
            >Europe</NavLink>

            <NavLink
                to = '/tropics'
                exact
                style = {link}
                activeStyle = {{
                    background: 'pink'
                }}
            >Tropical</NavLink>

            <NavLink
                to = '/asia'
                exact
                style = {link}
                activeStyle = {{
                    background: 'pink'
                }}
            >Asia</NavLink>

            <NavLink
                to = '/africa'
                exact
                style = {link}
                activeStyle = {{
                    background: 'pink'
                }}
            >Africa</NavLink>

            <NavLink
                to = '/australia'
                exact
                style = {link}
                activeStyle = {{
                    background: 'pink'
                }}
            >Australia</NavLink>
        </div>
    )
}

export default NavBar
