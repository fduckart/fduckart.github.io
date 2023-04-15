import React from 'react';

import {Records} from "./Records";
import {Films} from "./Films";
import {Books} from "./Books";
import {Songs} from "./Songs";

export const MainBody = () => {

    return (
        <div className="container mt-2">
            <ul id="tabs" className="nav nav-tabs" data-tabs="tabs">
                <li role="tab" className="nav-item"><a href="src#records" data-bs-toggle="tab" className="nav-link text-secondary active" id="records-tab">Records</a></li>
                <li role="tab" className="nav-item"><a href="src#songs" data-bs-toggle="tab" className="nav-link text-secondary" id="songs-tab">Songs</a></li>
                <li role="tab" className="nav-item"><a href="src#films" data-bs-toggle="tab" className="nav-link text-secondary" id="films-tab">Films</a></li>
                <li role="tab" className="nav-item"><a href="src#books" data-bs-toggle="tab" className="nav-link text-secondary" id="books-tab">Books</a></li>
            </ul>
            <div id="fav-tab-content" className="tab-content mt-2">
                <div className="tab-pane container active" id="records">
                    <div className="card-block">
                        <Records/>
                    </div>
                </div>
                <div className="tab-pane container" id="songs">
                    <div className="card-block">
                        <Songs/>
                    </div>
                </div>
                <div className="tab-pane container" id="films">
                    <div className="card-block">
                        <Films/>
                    </div>
                </div>
                <div className="tab-pane container" id="books">
                    <div className="card-block">
                        <Books/>
                    </div>
                </div>
            </div>
        </div>
    );

}