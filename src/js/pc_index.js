import React from 'react';
import PCHeader from './components/pc_header';

import PCIndexChild from './components/pc_indexchild'

export default class PCIndex extends React.Component{

    constructor(){
        super();
        this.state={
            name:'Bruce Lee'
        }
    }


    handleChildValueChange(event){
        this.setState({
            name:event.target.value
        })
    }
    render(){
        return(
            <div>
                <PCHeader/>
                {this.state.name}
                <PCIndexChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        );

    }
}