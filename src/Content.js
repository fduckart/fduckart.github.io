import React from 'react';

import {Records} from "./components/Records";
import {Films} from "./components/Films";
import {Books} from "./components/Books";
import {Songs} from "./components/Songs";

export class Content extends React.Component {

    render() {
        return (
            <div className="container mt-2">
                <ul id="tabs" className="nav nav-tabs" data-tabs="tabs">
                    <li role="tab" className="nav-item"><a href="#records" data-bs-toggle="tab" className="nav-link text-secondary active" id="records-tab">Records</a></li>
                    <li role="tab" className="nav-item"><a href="#songs" data-bs-toggle="tab" className="nav-link text-secondary" id="songs-tab">Songs</a></li>
                    <li role="tab" className="nav-item"><a href="#films" data-bs-toggle="tab" className="nav-link text-secondary" id="films-tab">Films</a></li>
                    <li role="tab" className="nav-item"><a href="#books" data-bs-toggle="tab" className="nav-link text-secondary" id="books-tab">Books</a></li>
                </ul>
                <div id="fav-tab-content" className="tab-content mt-1">
                    <div className="tab-pane container active" id="records">
                        <div className="card-block">
                            <Records/>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="films">
                        <div className="card-block">
                            <Films/>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="books">
                        <div className="card-block">
                            <Books/>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="songs">
                        <div className="card-block">
                            <Songs/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
