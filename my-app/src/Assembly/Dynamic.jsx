
//文章与动态
import React, { Suspense, lazy, Component } from 'react';
import '../CSS/Dynamic.css';
import Concept from '../Assembly/Bacteria_char/Concept';
import Date from '../date.json';
const TextTemplate = lazy(() => import('../Assembly/Bacteria_char/TextTemplate'));
const Img = lazy(() => import('../Assembly/Bacteria_char/Img'))

export default class Dynamic extends Component {
    render() {
        let sty = {
            height: "250px",
            backgroundImage: "url('Xixi_img/06项目照片/孩子们的画-新公民计划-课题组扫描-20161004/赵帅-二二班-三等奖.jpg')",
            width: "100%",
            backgroundSize: "114%",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            borderRadius: "20px"
        }
        return (
            <div className="wenzhangyudongtai">
                <div style={sty}></div>
                <div id="canyu"></div>
                <TextTemplate title={"希希学园志愿者招募"} content={
                    <div>
                        <div>
                            <p>
                                中国流动人口规模达到2.36亿，其中流动人口子女规模约为9870万人，占中国儿童总数的35.65%。
                                这群儿童就是人们熟知的是“留守儿童”，其中有一些跟随父母进入城市，成为“流动儿童”，规模约为3491万，数量庞大，却常常被忽略（新公民计划，2020）。
                                因为一些客观条件限制，许多流动儿童无法获得足够优质的教育资源，特别是在性教育方面。
                            </p>
                            <img className="img_1" src="IMG_Xixi/500.jpg" alt="" />
                            <p>
                                希希学园，从2014年开始关注在北京的流动儿童，致力于为他们提供优质的性教育资源。
                                2016年，北京希希儿童关爱中心在北京市民政局注册为民办非企业。
                                在过去的六年中，希希学园每年都会支持十几所打工子弟学校开设性教育课程，每年都可以使上万人受益。
                            </p>
                            <div>
                                <img className="img_1" src="Img_Xixi/课程内容.png" alt="课程内容" />
                                <div className="juzhong">
                                    希希学园性教育课程内容
                                </div>
                                <p>
                                    根据赖珍珍（2015）等学者对参加过流动儿童性教育课程的小学三年级学生的研究发现，通过性教育课程，流动儿童的健康行为能得到显著改善。
                                    性教育包括了健康的生活习惯的教育，在学校开展性教育课程，通过系统的、有组织、有计划的，而且是循序渐进、持续性的教育，对提高小学生健康知识水平，养成健康的生活习惯具有极其重要的作用。
                                    与此同时，研究还表明学校性教育对学生提高性健康知识水平，树立正确的观念，养成良好的行为习惯产生了积极的作用。
                                    尽管现有研究已经证明了性教育对流动儿童的重要性，但是打工子弟学校囿于各种资源的匮乏，往往不能够为流动儿童提供可持续的性教育，希希学园正努力弥补这一缺陷。
                                </p>
                                <p>
                                    现在，希希学园将长期面向社会招募志愿者，只要你有一颗想要服务于流动儿童性教育的心，就可以成为希希学园的志愿者，与我们一同为一个更包容更多元更美好的未来而努力。
                                    你可以根据自己的时间、精力以及兴趣决定自己参与的内容和程度，总的来说，你可以选择成为授课志愿者或是传播志愿者。
                                </p>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <ul>
                                授课志愿者
                                <li>每周一次，至少连续六周，工作日，在北京的流动儿童学校进行授课</li>
                                <li>教材开发、编写教案</li>
                                <li>对于想要参与授课的志愿者，我们会有测试、培训和试讲等过程，全部通过之后才能成为志愿教师</li>
                            </ul>
                            <ul>
                                传播志愿者
                                <li>每周撰写一篇与性教育相关的知识性文章</li>
                                <li>推荐绘本，并录音或者制作图文视频，形式参考公众号中《绘本分享》内容，发送到<a style={{ color: "red", textDecoration: "underline" }} href="mailto:xxxy@xingongmin.org.cn">xxxy@xingongmin.org.cn </a></li>
                                <li>微信、微博的日常运营</li>
                            </ul>
                            <ul>
                                你将获得
                                <li>性教育培训。
                                    包含：性教育理念培训、教材解读授课技巧培训、课堂控制技巧培训、试讲及评课等。
                                    帮助您更多地了解性教育的理念，了解孩子，帮助您掌握一定的授课技巧。
                                </li>
                                <li>性教育实战经验。从认同性教育的重要性，到能够坦然把“性”讲出来，中间巨大的鸿沟，我们一起跨过。</li>
                                <li>认识志同道合的朋友。认识一群与你同样有理想、有情怀、有行动力的朋友们。</li>
                                <li>做了一件有意义的事。你讲授的知识将会帮助到更多的孩子，有效地避免他们被伤害或是伤害他人，推动了一个更包容更多元更美好的社会的进程。</li>
                            </ul>
                            <img className="img_2" src="Img_Xixi/liusiling.webp" alt="" />
                            <div className="juzhong">
                                长按图片，打开名片，添加“希希学园-儿童性教育”为好友
                            </div>
                            <p id="yanjiu">
                                无论你想用以上哪种方式参 与到流动儿童性教育这份事业之中，都可以添加“xixixueyuan2”为微信好友，注明“志愿者申请/了解希希学园”，了解更多有关流动儿童性教育的资讯。
                            </p>
                            <p id="lingyu"></p>
                            <TextTemplate id="lingyu" title={"全面性教育"} content={
                                <div>
                                    <ul>
                                        <li>
                                            <div>
                                                <ol>
                                                    全面性教育的八个核心概念：
                                                    <li>关系</li>
                                                    <li>价值观、权利、文化与性</li>
                                                    <li>理解社会性别</li>
                                                    <li>暴力与安全保障</li>
                                                    <li>健康与福祉技能</li>
                                                    <li>人体与发育</li>
                                                    <li>性与性行为</li>
                                                    <li>性与生殖健康</li>
                                                </ol>
                                                <div className="kaoyou">
                                                    2018 ——《国际性教育技术指导纲要》
                                                </div>
                                            </div>
                                        </li>
                                        <br /><br />
                                        <li>
                                            <div>
                                                <ol>
                                                    全面性教育的目标
                                                    <div>
                                                        性教育的首要目标就是在这个遭受艾滋病病毒困扰的世界上，让儿童和年轻人掌握相关的知识、技能和价值观，以帮助他们在自己的性关系和社会关系方面做出负责任的选择。
                                                    </div>
                                                    <div>
                                                        性教育计划通常有以下几个相辅相成的目标：
                                                    </div>
                                                    <li>
                                                        增加知识，增进理解；
                                                    </li>
                                                    <li>
                                                        解释和澄清各种感受、价值观和态度；
                                                    </li>
                                                    <li>
                                                        培养或提高技能；以及
                                                    </li>
                                                    <li>
                                                        提倡和坚持降低风险的行为。
                                                    </li>
                                                </ol>
                                                <div className="kaoyou">
                                                    ——《国际性教育技术指导纲要》
                                                    联合国教育、科学及文化组织
                                                    2010年
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            } />
                            <TextTemplate title={"全面性教育关键概念"} content={
                                <div className="gainian">
                                    {
                                        Date.Gainian_list.map((item, index) => {
                                            return (
                                                <Concept key={index + item} title={Date.Gainian_list[index][0]}
                                                    arr_list={
                                                        Date.Gainian_list[index][1].map((item_2, index_2) => {
                                                            return (
                                                                <li key={item_2 + index_2}>{item_2}</li>
                                                            )
                                                        })
                                                    }
                                                />
                                            )
                                        })
                                    }
                                </div>
                            } />
                        </div>

                    </div>
                } />
                <p id="wangqi"></p>

                <Suspense fallback={
                    <div>
                        loading.....
                    </div>
                }>

                    <TextTemplate id="wangqi" title={"往期活动照片"} content={
                        <div className="xiangmuji_img">
                            {
                                Object.keys(Date.imgLink).map((value) => {
                                    console.log(value)
                                    return (
                                        <TextTemplate key={value} title={Date.imgLink[value].name} content={
                                            <div className="xiangmu-img">
                                                {
                                                    Date.imgLink[value].Link.map((item, index) => {
                                                        console.log(Date.imgLink[value].name);
                                                        console.log(item)
                                                        return (
                                                            <Img key={item + index} IMG_src={"Xixi_img/06项目照片/" + Date.imgLink[value].name + "/" + item} title={"click_img" + index} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        } />
                                    )
                                })
                            }
                        </div>
                    } />
                </Suspense>
            </div>
        )
    }
}

