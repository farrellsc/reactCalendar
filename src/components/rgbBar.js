import React, {Component} from 'react';
import {Slider} from 'antd';


class RgbBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            color_frame_style: {
                "backgroundColor": "rgb(127,127,127)",
                "width": "200px",
                "height": "50px"
            },
            slider_style: {
                "width": "100px"
            },
            rgb: [127, 127, 127]
        };
    }

    handleSliderChangeR = (value) => {
        let newrgb = Object.assign([], this.state.rgb);
        newrgb[0] = value;
        this.setState({rgb: newrgb});
        let new_backgroundColor = Object.assign({}, this.state.color_frame_style);
        new_backgroundColor.backgroundColor = "rgb(" + this.state.rgb[0] + "," + this.state.rgb[1] + "," + this.state.rgb[2] + ")";
        this.setState({color_frame_style: new_backgroundColor});
    }

    handleSliderChangeG = (value) => {
        let newrgb = Object.assign([], this.state.rgb);
        newrgb[1] = value;
        this.setState({rgb: newrgb});
        let new_backgroundColor = Object.assign({}, this.state.color_frame_style);
        new_backgroundColor.backgroundColor = "rgb(" + this.state.rgb[0] + "," + this.state.rgb[1] + "," + this.state.rgb[2] + ")";
        this.setState({color_frame_style: new_backgroundColor});
    }

    handleSliderChangeB = (value) => {
        let newrgb = Object.assign([], this.state.rgb);
        newrgb[2] = value;
        this.setState({rgb: newrgb});
        let new_backgroundColor = Object.assign({}, this.state.color_frame_style);
        new_backgroundColor.backgroundColor = "rgb(" + this.state.rgb[0] + "," + this.state.rgb[1] + "," + this.state.rgb[2] + ")";
        this.setState({color_frame_style: new_backgroundColor});
    }

    renderColorFrame = () => {
        return (
            <div className="color_frame">
                <p id="colored_frame" style={this.state.color_frame_style}> Colored Frame </p>
            </div>
        );
    }

    renderControllers() {
        return (
            <div className="controllers">
                <Slider max={255} defaultValue={this.state.rgb[0]} disabled={false} style={this.state.slider_style} onChange={this.handleSliderChangeR}/>
                <Slider max={255} defaultValue={this.state.rgb[1]} disabled={false} style={this.state.slider_style} onChange={this.handleSliderChangeG}/>
                <Slider max={255} defaultValue={this.state.rgb[2]} disabled={false} style={this.state.slider_style} onChange={this.handleSliderChangeB}/>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderColorFrame()}
                {this.renderControllers()}
            </div>
        );
    }
}

export default RgbBar;