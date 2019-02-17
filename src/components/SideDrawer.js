import React, {Component} from 'react';
import {Switch} from 'antd';
import MyDrawer from './MyDrawer';


class SideDrawer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            "visibility": false
        };
    }

    handleSwitch = (checked) => {
        this.setState({visibility: this.state.visibility === true ? false : true});
    }

    renderDrawer = () => {
        return (
            <div id="drawer">
                <MyDrawer visibility={this.state.visibility} onClose={this.handleSwitch}/>
            </div>
        )
    }

    render() {
        return (
            <div id="SideDrawer">
                <Switch onChange={this.handleSwitch} checked={this.state.visibility}/>
                {this.renderDrawer()}
            </div>
        );
    }
}

export default SideDrawer;