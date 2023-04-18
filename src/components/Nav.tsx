import React from 'react';
import Link from 'next/link';
import {NavLinksMore} from '@/components/NavLinksMore';
import {NavLinksPersonal} from '@/components/NavLinksPersonal';

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <Link className="navbar-brand fw-bold" href="/">Frank Duckart
                    &nbsp;
                    <i className="fa fa-lg fa-cogs" aria-hidden="true"></i>
                </Link>
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLinksPersonal/>
                    <NavLinksMore/>
                </div>
            </div>
        </nav>
    );
};
