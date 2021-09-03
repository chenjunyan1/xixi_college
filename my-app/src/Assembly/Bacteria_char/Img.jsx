import React, { Component } from 'react'
import '../../CSS/Assembly_char/Img.css'
export default class Img extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sca:{transform:"scale(1.0)"},
            daxiao:"Max"
        }
    }
    handclick(){
        if (this.state.sca.transform == "scale(1.0)") {
            this.setState({
                sca:{
                    transform:"scale(1.2)"
                },
                daxiao:"Min"
            })
        }else{
            this.setState({
                sca:{
                    transform:"scale(1.0)"
                },
                daxiao:"Max"
            })
        }
    }
    render() {
        return (
            <div className="Img-zujian">

                <div>
                    <div>
                        <img style={this.state.sca} src={this.props.IMG_src} alt="" />
                    </div>
                </div>
                <div>
                    <div onClick={this.handclick.bind(this)}>
                        {this.props.title}{this.state.daxiao}
                    </div>
                </div>
            </div>
        )
    }
}
