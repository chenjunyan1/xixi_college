//联系我们
import React, { Component } from 'react'
import '../CSS/Contact.css'
export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let sty = {
            height: "250px",
            backgroundImage: "url('Xixi_img/绘画赛/49张-一等奖——一张超大未扫描/平等/双槐树行知六1唐佳琪.jpg')",
            width: "100%",
            backgroundSize: "114%",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
        }

        return (
            <div>
                <div style={sty} className="lianxi_bg" >
                    <div>
                        联系我们
                    </div>
                </div>
                <div>
                    <div className="lianxi_me">
                        <ul>
                            <li>
                                <div>地址</div>
                                <div>北京东城区崇文门</div>
                            </li>
                            <li>
                                <div>电子邮箱</div>
                                <div><a href="mailto:xxxy@xingongmin.org.cn">xxxy@xingongmin.org.cn </a></div>

                            </li>
                            <li>
                                <div>联系电话</div>
                                <div>13581568756</div>
                            </li>
                            <li>
                                <div>希希学园微信公众号</div>
                                <img src="Img_Xixi/gongzhonghao.png" alt="" />
                            </li>
                        </ul>
                        <div>
                            <img src="Img_Xixi/home.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
