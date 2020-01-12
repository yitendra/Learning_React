import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>
                <Link to='/home'>Home </Link>
                <Link to='/component3'>Component3 </Link>
                <Link to='/component2'>Component2 </Link>
                <Link to='/container1'>Container1 </Link>
            </div>
        )
    }
}

export default Header;