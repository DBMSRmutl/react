import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonRegister extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./Register'}> <button type="button" className="btn btn-primary">Register</button> </Link>
            </div>
        );
    }
}
export default ButtonRegister;