import useFetch from "../hooks/useFetch";

const RecordsTable = () => {
    const {data, isLoading, error} = useFetch("records.json");

    return (
        <table className='table lead'>
            <tbody>
                {error && <tr><td>{error}</td></tr>}
                {isLoading && <tr><td>Loading...</td></tr>}
                {data && data.records.map(r => (
                    <tr key={r.id}>
                        <td>{r.title}</td>
                        <td>{r.artist}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default RecordsTable;
