import React from 'react';
import Link from 'next/link';
import {URL_DATA_ROOT} from '@/constant/constants';

export const NavLinksPersonal = () => {
    return (
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' href='https://github.com/fduckart'
                   target='_duckartgithub'>
                    <i className='fa fa-github fa-lg' aria-hidden='true'></i> GitHub
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' href='https://www.linkedin.com/in/fduckart' target='_fduckartlinkedin'>
                    <i className='fa fa-linkedin-square fa-lg' aria-hidden='true'></i> LinkedIn
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' href='https://www.facebook.com/duckart' target='_fduckartfacebook'>
                    <i className='fa fa-facebook-square fa-lg' aria-hidden='true'></i> Facebook
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' href={URL_DATA_ROOT + 'fduckart-resume.pdf'} target='_fduckartresume'>
                    <i className='fa fa-external-link-square fa-lg' aria-hidden='true'></i> Résumé
                </Link>
            </li>
        </ul>
    );
};
