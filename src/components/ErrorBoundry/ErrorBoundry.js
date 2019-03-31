import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.state({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return (<h1>
                OOpppss
            </h1>)
        } 
        return this.props.children
    }
}