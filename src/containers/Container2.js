// To display array of objects in WEB page
// To create and handle a Form

import React, { Component } from 'react';

class Container2 extends Component{
    state={
        value:''
    }

    arr=[
        {id:1, text:'text1'},
        {id:2, text:'text2'},
        {id:3, text:'text3'},
        {id:4, text:'text4'},
        {id:5, text:'text5'}
    ];

    renderItem=(s)=>{
        return(
        <div key={s.id}>
            {s.id} {s.text}
        </div>
        )
    }

    handleChange = (e)=>{
        this.setState({value:e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.name.value)
        // OR console.log(this.state.value)
    }

    render(){
        return(
            <div>
                <h3>Array Display</h3>
                {this.arr.map((item,index)=>this.renderItem(item))}

                <div>
                    Form Value : {this.state.value}
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' id='name' onChange={this.handleChange}/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Container2;