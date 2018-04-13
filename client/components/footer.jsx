import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const BottomNav = () => {
    return (
        <footer>
            <Link to="/home">HOME</Link>
            <Link to="/matches">MATCHES</Link>
            <Link to="/messages">MESSAGES</Link>
        </footer>
    )
}

export default BottomNav
