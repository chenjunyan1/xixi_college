import React, { Component } from 'react';
import '../CSS/Volunteer.css';
//志愿者招募


let ImgRecruit_arr = [];
for (let n = 0; n < 64; n++) {
    ImgRecruit_arr[n] = "幻灯片"+(n+1)+".PNG";    
}

export default class Volunteer extends Component {
    render() {
        return (
            <div>
                <div className="title_Volunteer">
                    <h1>志愿者招募</h1>
                </div>
                <div className="bianda_Volunteer">
                    <img src="Img/BianDa.svg" alt="大小调整" />
                </div>
                <div className="Volunteer_img">
                    {
                        ImgRecruit_arr.map((name,index) => {
                            return(
                                <img key={index+name} src={"ImgRecruit/"+ImgRecruit_arr[index]} alt="希希学园志愿者招募" />
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
