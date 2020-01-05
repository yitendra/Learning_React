// Functional component, got prop by a class component
import React from 'react';

const Component1=props=>{
    return(
        <div>
            <br/>
            Prop from Container1 = {props.prop.s3}
            <br/>
        </div>
    )
}

export default Component1;