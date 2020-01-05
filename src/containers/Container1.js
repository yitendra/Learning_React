// Render condition function
// Props and state
// Passing Prop to a functional component

import React, { Component } from "react";
import Component1 from '../functional/Component1';

class Container1 extends Component{
    constructor(props){
        super(props)
        this.state={
            s1:'Some text in state1',
            s2:0,
            s3:'Prop to Component1 from Container1'
        }

    }

    renderCondition1=(s)=>{
        if(s)
        return(<div>True Condition</div>)
        else return(<div>False Conditon</div>)
      }

    changeState(){
        this.setState({s1:'New State: ',s2:this.state.s2+1})
    }

    render(){
        return(
            <div>
                {this.props.name}
                {this.state.s1}
                {this.state.s2}
                <button onClick={()=>{this.changeState()}}>Change State</button>
                <Component1 prop={this.state} /><br/>
                {this.renderCondition1(1)}
            </div>
        )
    }
}

export default Container1;