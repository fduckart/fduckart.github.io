import FilmsList from '@/components/FilmsList';

export const Films = () => {
    return (
        <div>
            <h3 className='tab-headings'>Favorite Films</h3>
            <p className='lead text-muted'>
                These are great films. Watch them.
            </p>
            <FilmsList/>
        </div>
    );
};
