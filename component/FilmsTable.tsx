import useFetch from "@/hook/useFetch";
import {Film} from "@/type/Film";

const FilmsTable = () => {
    const {data, isLoading, error} = useFetch("films.json");
    const holder: { films: Film[] } = {films: data ? data["films"] : []};

    return (
        <table className='table lead'>
            <tbody>
            {error && <tr><td>{error}</td></tr>}
            {isLoading && <tr><td>Loading...</td></tr>}
            {
                !isLoading && holder.films.map(f => (
                    <tr key={f.id}>
                        <td>{f.title}</td>
                        <td>{f.director}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}
export default FilmsTable;
