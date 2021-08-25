//主页

import React, { Suspense, lazy, Component } from 'react';
import '../CSS/Home.css';


const Project = lazy(() => import('./Bacteria_char/Project'));
const Xixi_nei = lazy(() => import('../Assembly/Xixi_nei'));


export default class home extends Component {
    render() {
        return (
            <div>
                    <br />
                    <hr />
                    <br />
                    <div className="yemian_1">
                        <div></div>
                    </div>
                    <div className="xiangmu_1">
                        <br />
                        <hr />
                        <div className="mubiao">
                            <h2>我们的项目</h2>
                            <p>项目愿景：每个孩子在成长过程中都可以接受到适合其年龄、认知水平的全面性教育，掌握科学、正确的性知识，形成积极的性态度和价值观，能够正确认识自己、有效保护自己。</p>
                        </div>
                        <div>
                            <div className="xiangmu_2">
                                <Project Img_one={"Img/希希学园项目用图.jpg"} Title={"希希学园"} Content={"致力于为儿童提供全方位的全面性教育，帮助他们掌握科学、正确的性健康知识，形成积极的情感态度价值观，健康、快乐成长。"} Links={"https://xixi-college.vercel.app/"} yuedu={"阅读全文"} />
                                <Project Img_one={"Img/悦读悦成长项目图.jpg"} Title={"悦读悦成长"} Content={"是为基层居民提供读书、学习的场所，是传播精神文明的阵地"} Links={"https://chongxi-library.vercel.app/"} yuedu={"阅读全文"} />
                            </div>
                        </div>

                    </div>
                    
            </div>

        )
    }
}
