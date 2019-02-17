import React, {Component} from 'react';
import {Drawer} from 'antd';

class MyDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Drawer visible={this.props.visibility} onClose={this.props.onClose} closable={false}>
                    <h1>Register Account</h1>
                    <hr/>
                </Drawer>
            </div>
        );
    }
}

export default MyDrawer;