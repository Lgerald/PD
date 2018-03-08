import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MatchHome from 'material-ui/svg-icons/action/thumbs-up-down';
import ChatHome from 'material-ui/svg-icons/communication/chat'
import MySettings from 'material-ui/svg-icons/action/settings'

const Chat = <ChatHome />
const MatchCenter = <MatchHome />;
const Settings = <MySettings />

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
const BottomNav = () => {
        return (
            <Paper zDepth={1}>
                <BottomNavigation>
                    <Link to="/home"><BottomNavigationItem
                        label="settings"
                        icon={Settings}
                    /></Link>
                    <Link to="/matches"><BottomNavigationItem
                        label="Matches"
                        icon={MatchCenter}
                    /></Link>
                    <Link to="/messages"><BottomNavigationItem
                        label="messages"
                        icon={Chat}
                    /></Link>
                </BottomNavigation>
            </Paper>
        );
}

export default BottomNav
