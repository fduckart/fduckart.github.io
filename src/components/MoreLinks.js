import React from 'react';

export const MoreLinks = () => {
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="https://www.hawaii.edu/leave" target="_leave">Leave</a></li>
                    <li><a className="dropdown-item" href="https://www.hawaii.edu/paystub/gate" target="_paystub">Paystub</a></li>
                    <li><a className="dropdown-item" href="https://www.hawaii.edu/filedrop" target="_filedrop">Filedrop</a></li>
                    <li><a className="dropdown-item" href="https://www.hawaii.edu/its/ws/holiday" target="_holiday">Holidays</a></li>
                    <li className="divider"></li>
                    <li><a className="dropdown-item" href="https://www.hawaii.edu/" target="_uh">UH</a></li>
                    <li><a className="dropdown-item" href="https://manoa.hawaii.edu/" target="_uhmanoa">UH Manoa</a></li>
                    <li className="divider"></li>
                    <li><a className="dropdown-item" href="https://www.flickr.com/photos/fduckart" target="_fduckartflickr"><i className="fa fa-flickr fa-lg" aria-hidden="true"></i> Flickr</a></li>
                </ul>
            </li>
        </ul>
    );
}
