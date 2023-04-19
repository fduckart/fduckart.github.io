import useFetch from '@/hook/useFetch';
import {items} from '@/type/Song';

const SongsTable = () => {
    const {data, isLoading, error} = useFetch('songs.json');
    return (
        <table className='table lead'>
            <tbody>
            {error && <tr><td>{error}</td></tr>}
            {isLoading && <tr><td>Loading...</td></tr>}
            {
                !isLoading && items(data).map(s => (
                    <tr key={s.id}>
                        <td>{s.title}</td>
                        <td>{s.artist}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};
export default SongsTable;
