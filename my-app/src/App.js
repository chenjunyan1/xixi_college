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

let click_on = 1;
// let more_styly = {};


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value_1:'1',
      more_style : {},
      daohang:{},
      more:{},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
      <div>
       <Router>
         <div className="daohanglan" style={this.state.daohang}>
           <div className="zuo">
             <img className="xixi_logo" src="Img/Logo_img.jpg" alt="希希学院"/>
           </div>
           <div className="you" style={this.state.more_style}>
              <Link to="/">首页</Link>
              <div className="chumo">
                <div>
                  <div>文章与动态 -&gt;</div>
                  {/* <Link to="/Dynamic">文章与动态 -&gt;</Link> */}
                </div>
                <div className="xiala">
                  <div>参与活动|成为志愿者</div>
                  <div>项目进展</div>
                  <div>流动儿童返乡追踪</div>
                  <div>领域研究</div>
                  <div>流动有希望</div>
                  <div>职位招聘</div>
                </div>
              </div>
              <div className="chumo">
                <div>
                  <div>项目简介 -&gt;</div>
                  {/* <Link to="/Brief_Introduction">项目简介 -&gt;</Link> */}
                </div>
                <div className="xiala">
                  <div>行动倡导</div>
                  <div>传播倡导</div>
                  <div>研究倡导</div>
                  <div>往期项目</div>
                </div>
              </div>
              <div className="chumo">
                <div>
                    <div>关于我们 -&gt;</div>
                    {/* <Link to="/About">关于我们 -&gt;</Link> */}
                </div>
                <div className="xiala">
                  <div>使命愿景</div>
                  <div>团队成员</div>
                  <div>理事会成员</div>
                </div>
              </div>
              <div className="chumo">
                <div>
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
         <Suspense fallback={
              <header className="App-header">
                  Loading...
                  {/* <img src="" className="App-logo" alt="logo" /> */}
              </header>}>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/Brief_Introduction" component={Brief_Introduction} />
                  <Route path="/About" component={About} />
                  <Route path="/Contact" component={Contact} />
                  <Route path="/Dynamic" component={Dynamic} />
                  <Route path="/Support" component={Support} />
                  <Route path="/Work_open" component={Work_open} />
                  <Route path="*" component={Img_404} />
              </Switch>
            </Suspense>
          </Router>
      </div>
    )
  }
}
