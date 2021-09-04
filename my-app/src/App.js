import './App.css';

// import React, { Component } from 'react'

import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const About = lazy(() => import('./Assembly/About'));//关于我们
const Brief_Introduction = lazy(() => import('./Assembly/Brief_Introduction'));//项目简介
const Contact = lazy(() => import('./Assembly/Contact'));//联系我们
const Dynamic = lazy(() => import('./Assembly/Dynamic'));//文章与动态
const Home = lazy(() => import('./Assembly/Home'));//首页
const Support = lazy(() => import('./Assembly/Support'));//支持我们
const Work_open = lazy(() => import('./Assembly/Work_open'));//信息公开
const Img_404 = lazy(() => import('./Assembly/Bacteria_char/Img_404'));//404组件
const ActivityPhotos = lazy(() => import('./Assembly/Volunteer'));//往期活动照片
const Volunteer = lazy(() => import('./Assembly/Volunteer_img'));//志愿者招募

let click_on = 1;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value_1: '1',
      more_style: {},
      daohang: {},
      more: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.saveRef = ref => { this.refDom = ref };
  }


  // 过度锚点
  scrollToAnchor = (anchorName, Link, event) => {

    console.log("在本页面开始寻找ID:" + anchorName)
    if (anchorName) {
      const { clientWidth } = this.refDom;

      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        console.log("找到" + anchorName + "锚点了,正在前往")
        if (clientWidth < 600) {
          this.handleClick();
          setTimeout(() => {
            anchorElement.scrollIntoView({ behavior: "smooth", });
          }, 1000);
        } else {
          anchorElement.scrollIntoView({ behavior: "smooth", });
        }
      } else {
        this.handleClick_Link(Link, event);
        console.log("本页面没找到ID:" + anchorName + "将前往" + Link);
      }
    }
  }

  handleClick() {
    // e.preventDefault();
    console.log('被点击');
    if (click_on == 1) {
      click_on = 2;
      this.setState({
        more_style: {
          height: "900px",
          width: "100%"
        },
        daohang: {
          flexDirection: 'column',
        },
        more: {
          justifyContent: 'center',

        }
      });

      console.log('flex');
    } else {
      click_on = 1;
      this.setState({
        more_style: {
          height: "0px",
          width: "0px"
        },
        daohang: {
          flexDirection: 'row',
          justifyContent: 'spaceAround',
          flexWrap: 'wrap',
        },
      });
      console.log('none');
    }
  }
  handleClick_Link = (Link, event) => {
    // const href = window.location.origin + window.location.hash;
    const { clientWidth, clientHeight } = this.refDom;
    if (clientWidth < 600) {
      this.handleClick();
      console.log(event);
      setTimeout(() => {
        // window.history.pushState({}, 0, href);
        window.location.href = '/' + Link;

      }, 1000);
    } else {
      // window.history.pushState({}, 0, href);

      window.location.href = '/' + Link;
    }
    // Route.path = Link;
    // event.target.baseURI+=Link;
    // event.target.firstChild.ownerDocument.URL+=Link;
  }

  render() {
    return (
      <Router>
        <div ref={this.saveRef}>
          <div className="zong">
            <div className="daohanglan" style={this.state.daohang}>
              <div className="zuo">
                <img className="xixi_logo" src="Img/Logo_img.png" alt="希希学院" />
              </div>
              <div className="you" style={this.state.more_style}>
                <div onClick={this.handleClick_Link.bind(this, "")}>首页</div>
                <div className="chumo">
                  <div className="se">
                    {/* <div>文章与动态 -&gt;</div> */}
                    <div onClick={this.handleClick_Link.bind(this, "Dynamic")}>文章与动态 -&gt;</div>
                  </div>
                  <div className="xiala">
                    <div onClick={this.scrollToAnchor.bind(this, "canyu", "Dynamic")}>参与活动|成为志愿者</div>
                    {/* <div></div> */}
                    {/* <div>流动儿童返乡追踪</div> */}
                    {/*教材框架介绍*/}
                    <div onClick={this.scrollToAnchor.bind(this, "lingyu", "Dynamic")}>领域研究</div>
                    <div onClick={this.scrollToAnchor.bind(this, "wangqi", "Dynamic")}>往期活动照片</div>

                    {/* <div>流动有希望</div> */}
                    {/* <div>职位招聘</div> */}
                  </div>
                </div>
                <div className="chumo">
                  <div className="se">
                    {/* <div>项目简介 -&gt;</div> */}
                    <div onClick={this.handleClick_Link.bind(this, "Brief_Introduction")}>项目简介 -&gt;</div>
                  </div>
                  <div className="xiala">
                    <div onClick={this.scrollToAnchor.bind(this, "yuanqi", "Brief_Introduction")}>项目缘起</div>
                    <div onClick={this.scrollToAnchor.bind(this, "jieshao", "Brief_Introduction")}>希希学园介绍</div>
                    <div onClick={this.scrollToAnchor.bind(this, "ertong", "Brief_Introduction")}>谁是流动儿童</div>
                    <div onClick={this.scrollToAnchor.bind(this, "fazhan", "Brief_Introduction")}>机构发展史</div>
                    <div onClick={this.scrollToAnchor.bind(this, "yuanjing", "Brief_Introduction")}>愿景理念使命</div>
                    <div onClick={this.scrollToAnchor.bind(this, "jinzhan", "Brief_Introduction")}>项目进展</div>
                    {/* <div>性教育理念</div> */}
                    {/* <div>全面性教育的关键概念</div> */}
                    {/* <div>教材框架介绍</div> */}
                  </div>
                </div>

                <div className="chumo">
                  <div className="se">
                    {/* <div>信息公开 -&gt;</div> */}
                    <div onClick={this.handleClick_Link.bind(this, "Work_open")}>信息公开 -&gt;</div>
                  </div>
                  <div className="xiala">
                    <div onClick={this.scrollToAnchor.bind(this, "jianbao", "Work_open")}>工作简报</div>
                    <div onClick={this.scrollToAnchor.bind(this, "baogao", "Work_open")} >年度审计报告</div>
                    <div onClick={this.scrollToAnchor.bind(this, "zhengshu", "Work_open")}>年检证书</div>
                    {/* <div>资质证明</div> */}
                    {/* <div>组织规则</div> */}
                    {/* <div>管理制度</div> */}
                    {/* <div>财务信息</div> */}
                  </div>
                </div>
                <div className="chumo">
                  <div className="se">
                    {/* <div>关于我们 -&gt;</div> */}
                    <div onClick={this.handleClick_Link.bind(this, "About")}>关于我们</div>
                  </div>
                  {/* <div className="xiala"> */}
                  {/* <a href="#xixi">希希学园介绍</a> */}
                  {/* <a>机构发展历程</a> */}
                  {/* <a>愿景理念使命</a> */}
                  {/* <a>成员</a> */}
                  {/* </div> */}
                </div>
                <div onClick={this.handleClick_Link.bind(this, "Contact")}>联系我们</div>
                <div onClick={this.handleClick_Link.bind(this, "Support")}>支持我们</div>
                {/* <a href="https://www.lianquan.org/ActivityPlus_ActivityInfo?guid=233923D63B4DD42D610E2EFB60D6519420EBB5D72CAE631B5400D29114178AFE5205FED9EB9A7FCA53AF9360114790D4">支持我们</a> */}
              </div>
              <div className="more" onClick={this.handleClick} style={this.state.more}>
                <img src="Img/more.svg" alt="" />
              </div>
            </div>
          </div>
          <Suspense fallback={
            <header className="App-header">
              Loading...
              {/* <img src="" className="App-logo" alt="logo" /> */}
            </header>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Brief_Introduction" component={Volunteer} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Dynamic" component={Dynamic} />
              <Route exact path="/Support" component={Support} />
              <Route exact path="/Work_open" component={Work_open} />
              <Route exact path="/ActivityPhotos" component={ActivityPhotos} />
              <Route exact path="/Volunteer" component={Volunteer} />
              {/* <Route path='/Xixi_nei' component={Xixi_nei} /> */}
              {/* 404以上页面都没有找到，就显示404页面 */}
              <Route component={Img_404} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    )
  }
}




