import RecordsTable from '@/components/RecordsTable';

export const Records = () => {
    return (
        <div>
            <h3 className='tab-headings'>Favorite Albums</h3>
            <p className='lead text-muted'>
                I have spent hours and hours listening to each and every one.
            </p>
            <RecordsTable/>
        </div>
    );
};
