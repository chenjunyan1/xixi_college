import './App.css';

// import React, { Component } from 'react'

import React, { Suspense, lazy ,Component} from 'react';

import { BrowserRouter as Router , Route , Switch , Link } from 'react-router-dom';

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
  constructor(props){
    super(props);
    this.state={
      value_1:'1',
      more_style : {},
      daohang:{},
      more:{},
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    console.log('被点击');
        if (click_on == 1) {
          click_on = 2;
          this.setState({
            more_style:{
            display:'flex',
          },
          daohang:{
            flexDirection: 'column',
          },
          more:{
            justifyContent: 'center',

          }
          });
          
          console.log('flex');
        }else{
          click_on = 1;
          this.setState({
            more_style:{
            display:'none'
          },
          daohang:{
            flexDirection: 'row',
            justifyContent: 'spaceAround',
            flexWrap: 'wrap',
          },
          });
          console.log('none');
        }
  }

  render() {
    return (
    <Router>
      <div>
         <div className="zong">
            <div className="daohanglan" style={this.state.daohang}>
              <div className="zuo">
                <img className="xixi_logo" src="Img/Logo_img.png" alt="希希学院"/>
              </div>
              <div className="you" style={this.state.more_style}>
                  <Link to="/">首页</Link>
                  <div className="chumo">
                    <div className="se">
                      <div>文章与动态 -&gt;</div>
                      {/* <Link to="/Dynamic">文章与动态 -&gt;</Link> */}
                    </div>
                    <div className="xiala">
                      <div>参与活动|成为志愿者</div>
                      <div>往期活动照片</div>
                      {/* <div></div> */}
                      <div>流动儿童返乡追踪</div>
                      <div>领域研究</div>{/*教材框架介绍*/}
                      <div>流动有希望</div>
                      <div>职位招聘</div>
                    </div>
                  </div>
                  <div className="chumo">
                    <div className="se">
                      {/* <div>项目简介 -&gt;</div> */}
                      <Link to="/Brief_Introduction">项目简介 -&gt;</Link>
                    </div>
                    <div className="xiala">
                      <div>项目进展</div>
                      <div>性教育理念</div>
                      <div>全面性教育的关键概念</div>
                      {/* <div>教材框架介绍</div> */}
                    </div>
                  </div>
                  <div className="chumo">
                    <div className="se">
                        {/* <div>关于我们 -&gt;</div> */}
                        <Link to="/About">关于我们 -&gt;</Link>
                    </div>
                    <div className="xiala">
                      <div>希希学园介绍</div>
                      <div>机构发展历程</div>
                      <div>愿景理念使命</div>
                      <div>成员</div>
                    </div>
                  </div>
                  <div className="chumo">
                    <div className="se">
                      <div>信息公开 -&gt;</div>
                        {/* <Link to="/Work_open">信息公开 -&gt;</Link> */}
                    </div>
                    <div className="xiala">
                      <div>年度报告</div>
                      <div>资质证明</div>
                      <div>组织规则</div>
                      <div>管理制度</div>
                      <div>财务信息</div>
                    </div>
                  </div>
                  <Link to="/Contact">联系我们</Link>
                  <Link to="/Support">支持我们</Link>
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
                      <Route path="/Brief_Introduction" component={Volunteer} />
                      <Route path="/About" component={About} />
                      <Route path="/Contact" component={Contact} />
                      <Route path="/Dynamic" component={Dynamic} />
                      <Route path="/Support" component={Support} />
                      <Route path="/Work_open" component={Work_open} />
                      <Route path="/ActivityPhotos" component={ActivityPhotos}/>
                      <Route path="/Volunteer" component={Volunteer}/>
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

