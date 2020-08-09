import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowdata extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./Showdata'}> <button type="button" className="btn btn-primary">showdata</button> </Link>
            </div>
        );
    }
}
export default ButtonShowdata;