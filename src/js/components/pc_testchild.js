import React from 'react'

export default class PCTestChild extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <p>pc_testchild的子页面输入:</p><input type='text' onChange={this.props.handleChildValueChange}/>
            </div>
        )
    }


}