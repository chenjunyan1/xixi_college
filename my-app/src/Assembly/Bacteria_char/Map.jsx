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
        this.map.enableScrollWheelZoom(true)
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
