
//文章与动态
import React, { Suspense, lazy, Component } from 'react';
import '../CSS/Dynamic.css';
const TextTemplate = lazy(() => import('../Assembly/Bacteria_char/TextTemplate'));
export default class Dynamic extends Component {
    render() {
        return (
            <div>
                文章与动态
                <TextTemplate title={"sdsda"} content={
                    <div>
                        <div>sdas</div>
                        <div>dsasd</div>
                    </div>
                } />
            </div>
        )
    }
}
