import React from 'react'

export default class PCIndexChild extends React.Component{

    render(){
        return(
            <div>
                <span>子页面输入：</span><input type='text' onChange={this.props.handleChildValueChange}/>
            </div>
        );
    }
}