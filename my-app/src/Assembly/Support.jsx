//支持我们
import React, { Component } from 'react';
import '../CSS/Support.css';
import date from '../date.json';
import Project from'../Assembly/Bacteria_char/Project';

export default class Support extends Component {
    render() {
        return (
            <div>
                <div>

                </div>
                <div>
                    <h1 className="h1_h">性教育守护流动儿童</h1>
                    <p className="vid_p">打工子弟学校性教育课程，流动儿童学习性知识、保护自己</p>
                </div>
                <div className="video_mp4">
                    <video controls preload="none" poster="Img_Xixi/yujiazai.png" >
                        <source src="Vlog/流动儿童.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="wenti">
                    <div>
                        {
                            date.str.map((item, index) => {
                                return (
                                    <p key={item + index}>
                                        {item}
                                    </p>
                                )
                            })
                        }
                    </div>
                    <div>
                        <img src="//imgcdn.gongyi.qq.com/gongyi/bbd7a4ccf89e29212d70bc9bc3c3cc17c3756596d5649e68a4cf233ebd50a954/500"></img>
                        <p className="shouquan">（该图片已获授权）</p>
                        <img src="//imgcdn.gongyi.qq.com/gongyi/acad67b139420fc1f5a64f770313fa237604719d40ad579b97399a9b1620fdaa5ae7687ab888736d/500"></img>
                        <p className="shouquan">（该图片已获授权）</p>
                        <p>课程内容包括：</p>
                        <img src="Img_Xixi/课程内容.png"></img>
                        <p>接受过性教育的孩子们说： 我终于知道我是怎么来的了！ </p>
                        <img src="//imgcdn.gongyi.qq.com/gongyi/acad67b139420fc1f5a64f770313fa23acf38a7b718975933415f1569f190c641c81fb377287f63e/500"></img>
                        <p className="shouquan">（该图片已获授权）</p>
                        <p>我们一天天长大，身体也一天天发生着变化，男孩和女孩的身体外形出现了一些不同的变化…</p>
                        <img src="//imgcdn.gongyi.qq.com/gongyi/acad67b139420fc1f5a64f770313fa234ad99a2d24d1bcfc8b35fa34a0aa8aad234ac57df994de5c/500"></img>
                        <p className="shouquan">（该图片已获授权）</p>
                        <p>2020-2021学年，我们要继续在民办打工子弟学校开设性教育课程。为3000名流动儿童带去他们需要的性教育，并且会开展第三届性教育绘画赛，请孩子们继续用画笔展示他们对性教育的理解。</p>
                        <p>恳请您支持我们，支持流动儿童性教育！&nbsp;&nbsp;</p>
                    </div>
                </div>
                <div className="choukuan">
                    <h1 className="h1_h">项目筹款</h1>
                </div>
                <div className="juanzeng">
                    <Project Img_one={"Img_Xixi/gongyi.png"} Title={"99公益日｜性教育守护流动儿童"} Content={"你将加入一个热心公益、期待为流动儿童性教育作出贡献的线上社群。"} Links={"https://mp.weixin.qq.com/s/bbuXKEQJKvjc6xVtpXlqzA"} yuedu={"查看详情"}  />
                    <Project Img_one={"http://imgcdn.gongyi.qq.com/gongyi/acad67b139420fc1f5a64f770313fa23acf38a7b718975933415f1569f190c641c81fb377287f63e/500"} Title={"腾讯公益｜性教育守护流动儿童"} Content={"打工子弟学校性教育课程，流动儿童学习性知识、保护自己。"} Links={"https://ssl.gongyi.qq.com/m/weixin/detail.htm?et=fwh_gzh&pid=224166&parent1=68541EAF0D61B9A9F9D3DC8A1AE0CDDE936DF4BE713015D70524742A2B64C51AA5485B279C0294C357FA97E35A535E4D"} yuedu={"查看详情"}  />  
                </div>
            </div>
        )
    }
}
