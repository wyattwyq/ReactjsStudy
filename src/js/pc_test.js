import React from 'react'
import PCTestChild from './components/pc_testchild'

export default class PCTest extends React.Component{

    constructor(){
        super();
        this.state={
            age:50
        }
    }
    handleChildValue(event){
        this.setState({
            age:event.target.value
        })
    }

    render(){

        return(
            <div>
                <h4>age:{this.state.age}</h4>
                <PCTestChild handleChildValue={this.handleChildValue.bind(this)} />
            </div>
        )
    }

}