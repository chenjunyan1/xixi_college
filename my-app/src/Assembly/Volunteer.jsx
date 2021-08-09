import React, { Component } from 'react';
import '../CSS/Volunteer.css';
//往期活动照片


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
          src:'Img/Fang_da.svg',
        }
    
        this.handleClick = this.handleClick.bind(this);

      }

      handleClick(e){
        e.preventDefault();
        if (this.state.img.width == '25%') {
            this.setState({
                img:{
                    width:'50%',
                },
                src:'Img/Fang_da.svg',
            })
        }else if (this.state.img.width == '50%') {
            this.setState({
                img:{
                    width:'100%',
                },
                src:'Img/Suo_xiao.svg',

            })
        }else if (this.state.img.width == '100%') {
            this.setState({
                img:{
                    width:'25%',
                },
                src:'Img/Fang_da.svg',
            })
        }
      }

    render() {
        return (
            <div>
                <a title="一键置顶" className="xiangshang" href="#/top_zhaomu">
                    <img src="Img/Shang.svg" alt="" />
                </a>
                <div className="title_Volunteer">
                    <h1 id="/top_zhaomu">往期活动IMG</h1>
                </div>
                <div title="放大缩小器" className="bianda_Volunteer">
                    <img className="shang_chumo" onClick={this.handleClick} src={this.state.src} alt="大小调整" />
                </div>
                <div className="Volunteer_img">
                    {
                        ImgRecruit_arr.map((name,index) => {
                            return(
                                <img  style={this.state.img} key={index+name} src={"ImgRecruit/"+ImgRecruit_arr[index]} alt="希希学园志愿者招募" />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
