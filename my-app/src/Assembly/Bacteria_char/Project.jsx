//项目简介
import React, { Component } from 'react'
import '../../CSS/Assembly_char/Project.css'


export default class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return (
            <div className="Project_all">
                <div className="Project_shang">
                    <img src={this.props.Img_one} alt={this.props.Zhushi} />
                </div>
                <div className="Project_xia">
                    <div>
                        <h1 className="Project_title">{this.props.Title}</h1>
                        <p className="p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.Content}</p>
                    </div>
                    <div className="Project_title xia_yuedu">
                        <a className="p" href={this.props.Links} >{this.props.yuedu}- &gt;</a>
                    </div>
                </div>
            </div>
        )
    }
}
