import React from 'react';

import {MoreLinks} from './MoreLinks.js';
import {PersonalLinks} from './PersonalLinks.js';

export class Nav extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="/">Frank Duckart
                        &nbsp;
                        <i className="fa fa-lg fa-cogs" aria-hidden="true"></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <PersonalLinks/>
                        <MoreLinks/>
                    </div>
                </div>
            </nav>
        );
    }

}
