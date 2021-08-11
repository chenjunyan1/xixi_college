import React, { Component } from 'react';
import '../../CSS/Assembly_char/TextTemplate.css';
export default class TextTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {

        return (
            <div className="content_zujian">
                <hr />
                <div>
                    <h1>{this.props.title}</h1>
                    <div>
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}
