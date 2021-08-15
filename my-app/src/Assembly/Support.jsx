//支持我们
import React, { Component } from 'react';
import '../CSS/Support.css';

let str = [
    "每天都有儿童遭受性侵害，我们能做些什么？",
    "孩子们关于性的疑问有那么多，我们该怎样回答？",
    "孩子们关于性的疑问有那么多，我们该怎样回答？",
    "在北京，有很多流动儿童居住在鱼龙混杂的城中村、城边村，在条件简陋的民办打工子弟学校就读。",
    
];
export default class Support extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>性教育守护流动儿童</h1>
                    <p>打工子弟学校性教育课程，流动儿童学习性知识、保护自己</p>
                </div>
                <div className="video_mp4">
                    <video controls controlslist="nodownload" preload="none"poster="Img_Xixi/yujiazai.png" >
                        <source src="https://apd-bc089b88ffa6197b7a2e4e464e9807634b44703ef46532b0.v.smtcdns.com/om.tc.qq.com/A1rjk4IN2XTBqjalk9UlZpYTlzIhJODeTvnnq6Nie_Zg/uwMROfz2r5zBIaQXGdGnC2dfDma3J1MItM3912IN4IRQvkRM/j0314ty9mqp.mp4?sdtfrom=v3010&guid=f8a0e607c0d3751e62c00584710b6f1b&vkey=18CF8B4C74C64C76E8D51CD6FAB5C4AE4B19531F0765B9472F4FDE467513E640F80375781063E7299B176C22FD862DFAB6B556104758D001739C3D389F08674C967BFD6955B72C0E52DE3BCC83C795A48083205018848EEED07EA23837158D18E4A3F95F80F7909A56D9D7525ED4ADE8D1BED5321F08B75771F0D4B688CE07C238863720434312B2&platform=2#t=0"  type="video/mp4"/>
                    </video>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}
