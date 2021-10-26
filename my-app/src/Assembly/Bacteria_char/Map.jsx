import React, { Component } from 'react'


export default class Map extends Component {

    loadScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//api.map.baidu.com/api?v=2.0&ak=Ntcld1uAOGnorjipeh7O1wlfBCtPNgK2&callback=init";
        document.body.appendChild(script);
        
    }

    init = () => {
        const { BMap, BMAP_STATUS_SUCCESS } = window
        
        this.map = new BMap.Map("allmap");
        this.point = new BMap.Point(116.42181, 39.90682);
        this.map.centerAndZoom(this.point, 19);
        this.map.enableScrollWheelZoom(true);
        var marker1 = new BMap.Marker(new BMap.Point(116.42181, 39.90682));
        this.map.addOverlay(marker1);
        
        var opts = {
            position: new BMap.Point(116.42181, 39.90682), // 指定文本标注所在的地理位置
            offset: new BMap.Size(30, -30) // 设置文本偏移量
        };
        var label = new BMap.Label('北京希希学园关爱中心', opts);
        label.setStyle({
            color: 'blue',
            borderRadius: '5px',
            borderColor: '#ccc',
            padding: '10px',
            fontSize: '16px',
            height: '30px',
            lineHeight: '30px',
            fontFamily: '微软雅黑'
        });
        this.map.addOverlay(label);
    }
    componentDidMount() {
        window.init = this.init;
        this.loadScript();
        console.log("更新")
    }

    render() {
        return (
            <div style={{ width: '80%', marginBottom: '20px' }}>
                <div id="allmap" style={{ width: '100%', height: '500px' }}></div>
            </div>
        )
    }
}
