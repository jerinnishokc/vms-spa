import React from 'react';
import './sidenav.styles.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class SideNav extends React.Component {
    render() {        
        return (
            this.props.page === 'vendorpage' ?
            <aside className="vendor-side-nav">
                <ul>
                    <li><Link to={this.props.match.path}>Vendor dashboard</Link></li>
                    <li><Link to={`${this.props.match.path}/vendor-reg-form`}>Vehicle creation form</Link></li>
                    <li>Info</li>
                </ul>
            </aside> : 
            <aside>None</aside>
        );
    }
}

export default withRouter(SideNav); 