import React, { Component } from 'react'
import '../../CSS/Assembly_char/Briefing.css'
export default class Briefing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    render() {
        return (
            <div className="jianbao">
                <div>
                    <div>
                        <div>
                            （{this.props.num}）
                        </div>
                        <div>
                            {this.props.title}
                        </div>
                    </div>
                    <div>
                        <a href={this.props.Link}>阅读全文 - &gt;</a>
                    </div>
                </div>
            </div>
        )
    }
}
