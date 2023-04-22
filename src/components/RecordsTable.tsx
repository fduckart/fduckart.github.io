import useFetch from '@/hook/useFetch';
import {items} from '@/type/Record';
//import useFetch from '@/hook/useAxiosPromise';
//import useFetch from '@/hook/useAxiosAsync';

const RecordsTable = () => {
    //const {data, isLoading, error} = useFetch('records.json');
    const {data, error, isLoading} = useFetch('records.json');
    return (
        <table className='table lead'>
            <tbody>
            {error && <tr><td>{error}</td></tr>}
            {isLoading && <tr><td>Loading...</td></tr>}
            {
                !isLoading && items(data).map(r => (
                    <tr key={r.id}>
                        <td>{r.title}</td>
                        <td>{r.artist}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};
export default RecordsTable;
