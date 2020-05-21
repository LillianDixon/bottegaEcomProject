import React, { Component } from 'react';

export default class Account extends Component {

    renderContent(){
        // this.props.navbarLinks.map()
        return <h1>content</h1>
    }

    render() {
        return (
            <div>
                {
                    this.renderContent()
                }
            </div>
        );
    }
}