import SongsList from '@/components/SongsList';

export const Songs = () => {
    return (
        <div>
            <h3 className='tab-headings'>Favorite Songs</h3>
            <p className='lead text-muted'>
                My all-time favorite songs!
            </p>
            <SongsList/>
        </div>
    );
};
