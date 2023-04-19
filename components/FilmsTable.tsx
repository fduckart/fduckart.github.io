import useFetch from '@/hook/useFetch';
import {items} from '@/type/Film';

const FilmsTable = () => {
    const {data, isLoading, error} = useFetch('films.json');
    return (
        <table className='table lead'>
            <tbody>
            {error && <tr><td>{error}</td></tr>}
            {isLoading && <tr><td>Loading...</td></tr>}
            {
                !isLoading && items(data).map(f => (
                    <tr key={f.id}>
                        <td>{f.title}</td>
                        <td>{f.director}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};
export default FilmsTable;
