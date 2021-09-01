import React, { Component } from 'react'
import '../../CSS/Assembly_char/Img.css'
export default class Img extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Img-zujian">

                <div>
                    <div>
                        <img src={this.props.IMG_src} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        {this.props.title}
                    </div>
                </div>
            </div>
        )
    }
}
