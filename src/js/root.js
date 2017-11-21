import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import PCIndex from './components/pc_index';
import MediaQuery from 'react-responsive';
import MobileIndex from './components/mobile_index';


import {Router, Route, hashHistory} from 'react-router';

class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    }
}

ReactDOM.render(
    <Root/>, document.getElementById('MainContainer'));