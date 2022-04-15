import React, { Component } from 'react';
import '../style/Inputs.css';

export class Input extends Component{
    // onChange Handler function
    // with event parameter
    
    constructor (props) {
        super(props);
        this.state = {
            input1: ""
        }   
    };

    render(){
        return(
            <div>
                <TextField
                    label="Input 1"
                    name="input1"
                />
            </div>
        )
    }

    
}