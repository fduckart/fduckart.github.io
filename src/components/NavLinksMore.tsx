import React from 'react';
import Link from 'next/link';

export const NavLinksMore = () => {
    return (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</Link>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link href="https://www.hawaii.edu/leave" className="dropdown-item" target="_leave">Leave</Link></li>
                    <li><Link className="dropdown-item" href="https://www.hawaii.edu/paystub/gate" target="_paystub">Paystub</Link></li>
                    <li><Link className="dropdown-item" href="https://www.hawaii.edu/filedrop" target="_filedrop">Filedrop</Link></li>
                    <li><Link className="dropdown-item" href="https://www.hawaii.edu/its/ws/holiday" target="_holiday">Holidays</Link></li>
                    <li className="divider"></li>
                    <li><Link className="dropdown-item" href="https://www.hawaii.edu/" target="_uh">UH</Link></li>
                    <li><Link className="dropdown-item" href="https://manoa.hawaii.edu/" target="_uhmanoa">UH Manoa</Link></li>
                    <li className="divider"></li>
                    <li><Link className="dropdown-item" href="https://www.flickr.com/photos/fduckart" target="_fduckartflickr"><i className="fa fa-flickr fa-lg" aria-hidden="true"></i> Flickr</Link></li>
                    <li><Link className="dropdown-item" href="/fonts">Fonts</Link></li>
                </ul>
            </li>
        </ul>
    );
};
