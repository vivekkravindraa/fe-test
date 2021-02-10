import React, { Component } from 'react'

export default class AsyncParagraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        let res = this.props.loadData();
        let data = Promise.resolve(res);
        data.then((value) => this.setState({ value }));
    }

    render() {
        return (
            <div>
                <p>{this.state.value}</p>
            </div>
        )
    }
}
