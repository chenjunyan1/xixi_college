import React, { Component } from 'react';
import '../CSS/Volunteer.css';
//志愿者招募


let ImgRecruit_arr = [];
for (let n = 0; n < 64; n++) {
    ImgRecruit_arr[n] = "幻灯片"+(n+1)+".PNG";    
}

export default class Volunteer extends Component {
    constructor(props){
        super(props);
        this.state={
          img:{
              width:'25%'
          },
        };
    
        this.handleClick = this.handleClick.bind(this);
        // this.handleClick = this.hand.bind(this);
      }
    //   hand(e){
    //     e.preventDefault();
    //     if (this.state.img.width == '25%') {
    //         this.setState({
    //             img:{
    //                 width:'50%',
    //             }
    //         })
    //     }
    //   }
      handleClick(e) {
        e.preventDefault();
        if (this.state.img.width == '25%') {
            this.setState({
                img:{
                    width:'50%',
                }
            })
        }else if (this.state.img.width == '50%') {
            this.setState({
                img:{
                    width:'100%',
                }
            })
        }else if (this.state.img.width == '100%') {
            this.setState({
                img:{
                    width:'25%',
                }
            })
        }
    }
    render() {
        return (
            <div>
                <a className="xiangshang" href="#top_zhaomu">
                    <img src="Img/Shang.svg" alt="" />
                </a>
                <div className="title_Volunteer">
                    <h1 id="top_zhaomu">志愿者招募</h1>
                </div>
                <div className="bianda_Volunteer">
                    <img onClick={this.handleClick} src="Img/BianDa.svg" alt="大小调整" />
                </div>
                <div className="Volunteer_img">
                    {
                        ImgRecruit_arr.map((name,index) => {
                            return(
                                <img onClick={this.hand} style={this.state.img} key={index+name} src={"ImgRecruit/"+ImgRecruit_arr[index]} alt="希希学园志愿者招募" />
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
