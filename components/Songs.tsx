import SongsTable from './SongsTable';

export const Songs = () => {
    return (
        <div>
            <h3 className='tab-headings'>Favorite Songs</h3>
            <p className='lead text-muted'>
                My all-time favorite songs!
            </p>
            <SongsTable/>
        </div>
    );
};
