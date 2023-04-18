import Link from 'next/link';
import {Records} from '@/components/Records';
import {Films} from '@/components/Films';
import {Books} from '@/components/Books';
import {Songs} from '@/components/Songs';

export const MainBody = () => {
    return (
        <div className='container mt-2'>
            <ul id='tabs' className='nav nav-tabs' data-tabs='tabs'>
                <li role='tab' className='nav-item'><Link href='src#records' data-bs-toggle='tab' className='nav-link text-secondary active' id='records-tab'>Records</Link></li>
                <li role='tab' className='nav-item'><Link href='src#songs' data-bs-toggle='tab' className='nav-link text-secondary' id='songs-tab'>Songs</Link></li>
                <li role='tab' className='nav-item'><Link href='src#films' data-bs-toggle='tab' className='nav-link text-secondary' id='films-tab'>Films</Link></li>
                <li role='tab' className='nav-item'><Link href='src#books' data-bs-toggle='tab' className='nav-link text-secondary' id='books-tab'>Books</Link></li>
            </ul>
            <div id='fav-tab-content' className='tab-content mt-2'>
                <div className='tab-pane container active' id='records'>
                    <div className='card-block'>
                        <Records/>
                    </div>
                </div>
                <div className='tab-pane container' id='songs'>
                    <div className='card-block'>
                        <Songs/>
                    </div>
                </div>
                <div className='tab-pane container' id='films'>
                    <div className='card-block'>
                        <Films/>
                    </div>
                </div>
                <div className='tab-pane container' id='books'>
                    <div className='card-block'>
                        <Books/>
                    </div>
                </div>
            </div>
        </div>
    );
};
