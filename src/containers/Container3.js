//Redux support only Container Component not functional

import React, {Component} from 'react';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';


class Container3 extends Component{
    render(){
        const text1='This is text 1'
        return(
            <div>
                <button onClick={()=>console.log(this.props.user_input)}> Get State</button>
                <button onClick={()=>this.props.action1()}> Dispatch Action 1</button>
                <button onClick={()=>this.props.action2()}> Dispatch Action 2</button>
                <button onClick={()=>this.props.action_creator1()}> Dispatch Action_creator1</button>
                <button onClick={()=>this.props.action_creator2()}> Dispatch Action_creator2</button>
                <button onClick={()=>this.props.action_creator3(text1)}> Dispatch Action_creator2</button>
                <h1>{this.props.user_input}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        stateprop1: state.stateprop1,
        user_input: state.user_input
    }
}

function mapDispatchToProps(dispatch){
    return {
        action1: ()=> dispatch(ACTIONS.SUCCESS),
        action2: ()=> dispatch(ACTIONS.FAILURE),
        action_creator1: ()=> dispatch(ACTIONS.success()),
        action_creator2: ()=> dispatch(ACTIONS.failure()),
        action_creator3: (text)=> dispatch(ACTIONS.user_input(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container3);