import React from 'react'

const Header = (props) => {
    const { children } = props

    return (
        <header><h1>{children}</h1></header>
    )
}

export default Header