//信息公开
import React, { Suspense, lazy, Component } from 'react';
import '../CSS/Work_open.css';
const Briefing = lazy(() => import('./Bacteria_char/Briefing'));


let date_riqi = [
    "2021年6月",//1
    "2021年5月",//1
    "2021年4月",//1
    "2021年3月",//1
    "2020年12月",//0
    "2020年11月",//0
    "2020年10月",//0
    "2019年12月",//9
    "2019年10-11月",//9
    "2019年9月",//9
    "2019年5月",//9
    "2019年4月",//9
    "2019年3月",//9

];

let Link_arr = [
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650157968&idx=1&sn=8caee78bb0b422e715b46f758bb80e29&chksm=832a82e2b45d0bf499881541255ce3098c6c45fa7a6969c0d46bd9da66180d623d2b0d97fbf6&cur_album_id=1594725958744391682&scene=190#rd",//1
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650157883&idx=1&sn=0db66c817c5c21f46006b01c4c517700&chksm=832a8249b45d0b5f38a83597676c0335a79fcdf2dfed9a22476270ae004155fc26143847f66a&cur_album_id=1594725958744391682&scene=189#rd",//1
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650157810&idx=1&sn=3676275358aebd19e6d6432c6ec90a5c&chksm=832a8380b45d0a96e1158900c84951daf6f23480bbd1292485b32efecd88448b4f23e2f9c85c&cur_album_id=1594725958744391682&scene=190#rd",//1
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650157723&idx=1&sn=9cc1d5544803bf038e92d07929393358&chksm=832a83e9b45d0aff2df10906b61e347eeeb2fa19875e150bd28a4be0ff86e4849f91d1863ad1&cur_album_id=1594725958744391682&scene=190#rd",//1
    "http://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650157204&idx=1&sn=10ebe47c0d843a2098a856802f918cc0&chksm=832a81e6b45d08f0a32ca4464217dc562849a3fce623a059fed7667922482c333041386a9e31&cur_album_id=1594725958744391682&scene=190#rd",//0
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650157050&idx=1&sn=5fdd875b60ce3ac1bc6a882d3acfa00f&chksm=832a9e88b45d179ec8cd553dac1f956be0e33ff75dc5311c09e014c16215ea902e5400f894b2&cur_album_id=1594725958744391682&scene=190#rd",//0
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650156810&idx=1&sn=e91ae18d3f57464f670d243164fd6991&chksm=832a9e78b45d176e8b12ff3946c67b4f32759ab5a4269dbfa114f07e158103ec874f8b283e34&cur_album_id=1594725958744391682&scene=190#rd",//0
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650155971&idx=1&sn=ba97186f43ea8cd79994e09afbf691c7&chksm=832a9ab1b45d13a7604535eb56996281756d45d08ddf32f7c7b0ec593b156fb1190b43ea485e&cur_album_id=1594725958744391682&scene=190#rd",//9
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650155937&idx=1&sn=e2f15b0d1821ce95109a7b469e72d623&chksm=832a9ad3b45d13c5f36c46d77bf1be4467da8ee99880e7bf24a03511494b7406acdcb1d8cb43&cur_album_id=1594725958744391682&scene=190#rd",//9
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650155854&idx=1&sn=b822eac851cacb5a036b6610bb397c17&chksm=832a9a3cb45d132abff2913f1be5b7ee40b9b68c26e992e71d031d10ffda59e175ce8dd42100&cur_album_id=1594725958744391682&scene=190#rd",//9
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650155753&idx=1&sn=9f05993bc7ad24424e87f209448eba4f&chksm=832a9b9bb45d128db08d7f9a803308f98b631b6e8524fb1aef07c0df97e61ceaa5d4c18d87fe&cur_album_id=1594725958744391682&scene=190#rd",//9
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650155681&idx=1&sn=5e610f32669d37c0b89001d2360c665e&chksm=832a9bd3b45d12c5399c6af282404123362f54c8cf442bb58b3b8e5dec759fc3eceb5278ce33&cur_album_id=1594725958744391682&scene=190#rd",//9
    "https://mp.weixin.qq.com/s?__biz=MzAwNDY4NzkwMQ==&mid=2650155608&idx=1&sn=2eb6debf37e90faa1f2542eb4c127962&chksm=832a9b2ab45d123c717eaf9c5feb56f66bbf2795f1880cdbc07a6a90327c7bfa8ad0c9e01519&cur_album_id=1594725958744391682&scene=190#rd",//9

];

let shenji = [
    "2017", "2018", "2019"
];
let shenji_arr = [
    "https://mp.weixin.qq.com/s/VP1VeDVNmYPDsG3uz1GkFA",
    "https://mp.weixin.qq.com/s/Fd5CLkf2Lx_77mxKs1fQkg",
    "https://mp.weixin.qq.com/s/EZNhoL3hz9b66d-YkjsC5Q"
];


export default class Work_open extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sty: {
                height: "1px",
            },
            sty2: {
                height: "1px",
            },
            sty3: {
                height: "1px",
            }
        }
        // this.saveRef = ref => { this.refDom = ref };
        // this.handleClick = this.handleClick.bind(thi s);

    }
    handleClick = (len, event) => {
        console.log(event)
        // console.log("点击");
        // const {clientWidth, clientHeight} = this.refDom;
        console.log(event.target);
        if (event.target.parentElement.parentElement.children[1].style.height == 1 + "px") {
            console.log("张开")
            // this.setState({
            //      sty:{
            //         height:82*len
            //     }
            // });
            // event.target.style.height = 82*len+"px";
            event.target.parentElement.parentElement.children[1].style.height = 82 * len + "px";
        } else {
            console.log("收起")
            //    this.setState({
            //     sty:{
            //         height:'1px'
            //     }
            //     }); 

            event.target.parentElement.parentElement.children[1].style.height = 1 + "px"
            // event.target.parentElement.parentElement.children style.height = 1+"px"
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div className="bao">
                        <img src="Img_Xixi/Bao.svg" alt="" />
                        <div className="Center" onClick={this.handleClick.bind(this, date_riqi.length)}>工作简报 点击查看  - &gt;</div>
                    </div>
                    <div className="la" ref={this.saveRef} style={this.state.sty}>
                        {
                            date_riqi.map((item, index) => {
                                return (
                                    <Briefing key={item + index} num={date_riqi.length - index} title={"希希学园" + item + "工作简报"} Link={Link_arr[index]} />
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    {/* <div className="Center">年度审计报告</div> */}
                    <div className="bao">
                        <img src="Img_Xixi/Bao.svg" alt="" />
                        <div className="Center" onClick={this.handleClick.bind(this, shenji.length)}>年度审计报告 点击查看  - &gt;</div>
                    </div>
                    <div className="la" ref={this.saveRef} style={this.state.sty2}>
                        {
                            shenji.map((item, index) => {
                                return (
                                    <Briefing key={item + index} num={shenji.length - index} title={shenji[shenji.length - index - 1] + "年度北京希希儿童关爱中心审计报告"} Link={shenji_arr[shenji.length - index - 1]} />
                                )
                            })
                        }
                    </div>
                </div>
                {/* event.target.parentElement.parentElement.children[1] */}
                <div>
                    {/* <div className="Center" >年检证书</div> */}
                    <div className="bao">
                        <img src="Img_Xixi/Bao.svg" alt="" />
                        <div className="Center" onClick={this.handleClick.bind(this, 1)}>年检证书 点击查看  - &gt;</div>
                    </div>
                    <div className="la" style={this.state.sty2}>
                        <Briefing num={"1"} title={"希希学园历年检证书"} Link={"https://mp.weixin.qq.com/s/LNxSWGDvLjbXDHjFXQVhIg"} />
                    </div>
                </div>



            </div>
        )
    }
}
