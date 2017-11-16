import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import PCIndex from './pc_index';
// import MOBILEIndex from './mobile_index';
// import MediaQuery from 'react-responsive';

import {Router, Route, hashHistory} from 'react-router';

class Root extends React.Component {
    render() {
        return (
            <div>
                <PCIndex/>
            </div>
        );
    }
}

ReactDOM.render(
    <Root/>, document.getElementById('MainContainer'));