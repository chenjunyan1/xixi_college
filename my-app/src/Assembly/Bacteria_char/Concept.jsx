import React, { Component } from 'react'
import '../../CSS/Assembly_char/Concept.css'
export default class Concept extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let sty_back = {
            backgroundImage: "url(Img/fense.png)"
        }
        return (
            <div className="Concept" style={sty_back}>
                <div>
                    <div>{this.props.title}</div>
                    <img className="Concept_img" src="Img/Logo_img.png" alt="" />
                </div>
                <div>
                    {this.props.arr_list}
                </div>
            </div>
        )
    }
}
