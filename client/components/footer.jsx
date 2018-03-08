import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
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
class BottomNav extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({ selectedIndex: index });

    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="settings"
                        icon={Settings}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Matches"
                        icon={MatchCenter}
                        onClick={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="messages"
                        icon={Chat}
                        onClick={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default BottomNav
