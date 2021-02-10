import React, { Component } from 'react'

export default class ClickOnceButton extends Component {
    constructor(props) {
        super(props);
        this.state = { wasClicked: false }
    }

    onButtonClick = (event) => {
        if(!this.state.wasClicked) {
            this.props.onClick(event);
        }
        this.setState({ wasClicked: true })
    }

    render() {
        return (
            <div>
                <button onClick={(event) => this.onButtonClick(event)}>{this.props.text}</button>
            </div>
        )
    }
}
